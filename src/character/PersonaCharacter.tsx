// Persona Studio export · three.js character · re-export overwrites this file
//
// The rigged character from Blender (character.glb) with the same camera per breakpoint, lights, look,
// outline and animation behaviour as the Blender preview:
//   camera   stage.json shots (base / md / lg by window width), focus point kept at its screen anchor
//   lights   key / fill / rim suns + world light from stage.json, soft shadows
//   look     toon shading + rim (toon.ts), inverted hull outline
//   motion   main idle loop; a "bored" clip after a while without input; a "click" clip when she is clicked;
//            head and neck follow the pointer; playCharacterClip(name) from characterEvents.ts plays any clip
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import stageJson from "../stage/stage.json";
import { characterEvents } from "./characterEvents";
import { characterData, glbUrl } from "./model";
import { outlineMaterial, toonMaterial, type LookSettings, type MaterialSettings } from "./toon";

type Shot = { fov: number; anchor_x: number; anchor_y: number; position: number[]; target: number[] };
type Light = { name: string; direction: number[]; color: string; color_linear?: number[]; strength: number };
type StageData = {
  breakpoints: Record<string, number>;
  shots: Record<string, Shot>;
  lights: Light[];
  world?: { color_linear: number[]; strength: number };
};
type Clip = { name: string; role: string; loop: boolean };
type CharacterData = {
  height: number;
  draco?: boolean;
  clips: Clip[];
  outline?: { enabled: boolean; width: number; color: string };
  behavior?: { idle: string[]; bored_after_seconds: number; click_cooldown_seconds: number; crossfade_seconds: number };
  look_at?: { bones: { bone: string; weight: number }[]; max_yaw_deg: number; max_pitch_deg: number };
  look: LookSettings;
  materials?: MaterialSettings[];
};

const stage = stageJson as unknown as StageData;
const data = characterData as unknown as CharacterData;

function shotFor(width: number): Shot {
  const order = Object.entries(stage.breakpoints).sort((a, b) => b[1] - a[1]);
  for (const [name, min] of order) if (width >= min && stage.shots[name]) return stage.shots[name];
  return stage.shots.base;
}

function linear(l: Light) {
  const c = new THREE.Color();
  if (l.color_linear) c.setRGB(l.color_linear[0], l.color_linear[1], l.color_linear[2], THREE.LinearSRGBColorSpace);
  else c.set(l.color);
  return c;
}

export function PersonaCharacter({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;

    // ---------------------------------------------------------------- renderer, camera, lights
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.opacity = "0";
    renderer.domElement.style.transition = "opacity .6s ease";
    renderer.domElement.style.display = "block";
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 200);
    const target = new THREE.Vector3();

    const world = stage.world;
    if (world) {
      const wc = new THREE.Color().setRGB(world.color_linear[0], world.color_linear[1], world.color_linear[2],
        THREE.LinearSRGBColorSpace);
      scene.add(new THREE.AmbientLight(wc, Math.PI * world.strength));
    }
    const suns: THREE.DirectionalLight[] = [];
    for (const l of stage.lights) {
      const sun = new THREE.DirectionalLight(linear(l), l.strength);
      sun.userData.direction = new THREE.Vector3(l.direction[0], l.direction[1], l.direction[2]).normalize();
      sun.castShadow = true;
      sun.shadow.mapSize.set(2048, 2048);
      sun.shadow.bias = -0.0004;
      sun.shadow.normalBias = 0.02;
      sun.shadow.radius = 3;
      scene.add(sun, sun.target);
      suns.push(sun);
    }

    // ---------------------------------------------------------------- layout (same camera as Blender)
    const resize = () => {
      const W = Math.max(1, el.clientWidth);
      const H = Math.max(1, el.clientHeight);
      renderer.setSize(W, H);
      const shot = shotFor(W);
      camera.fov = shot.fov;
      camera.aspect = W / H;
      camera.position.set(shot.position[0], shot.position[1], shot.position[2]);
      target.set(shot.target[0], shot.target[1], shot.target[2]);
      camera.lookAt(target);
      camera.setViewOffset(W, H, (0.5 - shot.anchor_x) * W, (0.5 - shot.anchor_y) * H, W, H);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    // ---------------------------------------------------------------- character
    let model: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    const actions = new Map<string, THREE.AnimationAction>();
    const meshes: THREE.Mesh[] = [];
    const lookBones: { bone: THREE.Object3D; weight: number; base: THREE.Quaternion }[] = [];
    let current: THREE.AnimationAction | null = null;
    const behavior = data.behavior ?? { idle: [], bored_after_seconds: 20, click_cooldown_seconds: 1.2, crossfade_seconds: 0.25 };
    const idleName = behavior.idle[0] ?? data.clips.find((c) => c.role === "idle")?.name ?? "";
    const byRole = (role: string) => data.clips.filter((c) => c.role === role).map((c) => c.name);

    const play = (name: string, once: boolean) => {
      const next = actions.get(name);
      if (!next || !mixer) return;
      next.reset();
      next.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity);
      next.clampWhenFinished = once;
      next.enabled = true;
      next.setEffectiveWeight(1);
      next.play();
      if (current && current !== next) current.crossFadeTo(next, behavior.crossfade_seconds, false);
      current = next;
    };
    const playOnce = (name: string) => {
      if (actions.has(name)) play(name, !data.clips.find((c) => c.name === name)?.loop);
    };

    const loader = new GLTFLoader();
    let draco: DRACOLoader | null = null;
    if (data.draco) {
      draco = new DRACOLoader(); // decoder files come with three (bundled by Vite)
      loader.setDRACOLoader(draco);
    }
    loader.load(glbUrl, (gltf) => {
      if (disposed) return;
      model = gltf.scene;
      const mats = new Map((data.materials ?? []).map((m) => [m.name, m]));
      const outline = data.outline;
      const hulls: [THREE.Object3D, THREE.Object3D][] = [];
      model.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const swap = (m: THREE.Material) => toonMaterial(m, data.look, mats.get(m.name));
        mesh.material = Array.isArray(mesh.material) ? mesh.material.map(swap) : swap(mesh.material);
        mesh.castShadow = mesh.receiveShadow = true;
        mesh.frustumCulled = false;
        meshes.push(mesh);
        if (outline?.enabled && outline.width > 0) {
          const scale = mesh.getWorldScale(new THREE.Vector3()).x || 1;
          const mat = outlineMaterial(outline.color, (0.004 * data.height * outline.width) / scale);
          const sk = mesh as THREE.SkinnedMesh;
          let hull: THREE.Mesh;
          if (sk.isSkinnedMesh) {
            const skinned = new THREE.SkinnedMesh(sk.geometry, mat);
            skinned.bind(sk.skeleton, sk.bindMatrix);
            hull = skinned;
          } else {
            hull = new THREE.Mesh(mesh.geometry, mat);
          }
          hull.position.copy(mesh.position);
          hull.quaternion.copy(mesh.quaternion);
          hull.scale.copy(mesh.scale);
          hull.frustumCulled = false;
          hulls.push([mesh.parent ?? model!, hull]);
        }
      });
      for (const [parent, hull] of hulls) parent.add(hull);
      scene.add(model);

      // shadow cameras around the character
      const box = new THREE.Box3().setFromObject(model);
      const sphere = box.getBoundingSphere(new THREE.Sphere());
      for (const sun of suns) {
        const d = sun.userData.direction as THREE.Vector3;
        sun.target.position.copy(sphere.center);
        sun.position.copy(sphere.center).addScaledVector(d, -sphere.radius * 3);
        const cam = sun.shadow.camera;
        cam.left = cam.bottom = -sphere.radius * 1.1;
        cam.right = cam.top = sphere.radius * 1.1;
        cam.near = 0.01;
        cam.far = sphere.radius * 6;
        cam.updateProjectionMatrix();
      }

      for (const b of data.look_at?.bones ?? []) {
        const bone = model.getObjectByName(THREE.PropertyBinding.sanitizeNodeName(b.bone)) ?? model.getObjectByName(b.bone);
        if (bone) lookBones.push({ bone, weight: b.weight, base: bone.quaternion.clone() });
      }

      mixer = new THREE.AnimationMixer(model);
      for (const clip of gltf.animations) actions.set(clip.name, mixer.clipAction(clip));
      mixer.addEventListener("finished", (e) => {
        if (e.action === current && idleName) play(idleName, false);
      });
      if (idleName) play(idleName, false);
      renderer.domElement.style.opacity = "1";
    }, undefined, (err) => console.error("[Persona] the character could not be loaded:", err));

    // ---------------------------------------------------------------- input
    const pointer = new THREE.Vector2();
    let pointerActive = false;
    let lastInput = performance.now();
    let lastClick = 0;
    const raycaster = new THREE.Raycaster();
    const toNdc = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    };
    const onMove = (e: PointerEvent) => {
      toNdc(e);
      pointerActive = true;
      lastInput = performance.now();
    };
    const onLeave = () => {
      pointerActive = false;
    };
    const onDown = (e: PointerEvent) => {
      toNdc(e);
      lastInput = performance.now();
      if (!model || performance.now() - lastClick < behavior.click_cooldown_seconds * 1000) return;
      raycaster.setFromCamera(pointer, camera);
      if (raycaster.intersectObjects(meshes, false).length) {
        lastClick = performance.now();
        const clicks = byRole("click");
        if (clicks.length) playOnce(clicks[Math.floor(Math.random() * clicks.length)]);
      }
    };
    const onPlay = (e: Event) => playOnce((e as CustomEvent<string>).detail);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    renderer.domElement.addEventListener("pointerdown", onDown);
    characterEvents.addEventListener("play", onPlay);

    // ---------------------------------------------------------------- loop
    const yawPitch = new THREE.Vector2();
    const head = new THREE.Vector3();
    const rootQ = new THREE.Quaternion();
    const tmpQ = new THREE.Quaternion();
    const parentQ = new THREE.Quaternion();
    const delta = new THREE.Quaternion();
    const euler = new THREE.Euler(0, 0, 0, "YXZ");
    const ident = new THREE.Quaternion();
    const lookAt = (dt: number) => {
      if (!model || !lookBones.length || !data.look_at) return;
      const maxYaw = THREE.MathUtils.degToRad(data.look_at.max_yaw_deg);
      const maxPitch = THREE.MathUtils.degToRad(data.look_at.max_pitch_deg);
      let yaw = 0;
      let pitch = 0;
      const fresh = pointerActive && performance.now() - lastInput < 4000;
      if (fresh) {
        lookBones[lookBones.length - 1].bone.getWorldPosition(head);
        raycaster.setFromCamera(pointer, camera);
        const p = raycaster.ray.at(raycaster.ray.origin.distanceTo(head), new THREE.Vector3());
        const dir = p.sub(head);
        model.getWorldQuaternion(rootQ);
        dir.applyQuaternion(tmpQ.copy(rootQ).invert());
        yaw = THREE.MathUtils.clamp(Math.atan2(dir.x, dir.z), -maxYaw, maxYaw);
        pitch = THREE.MathUtils.clamp(Math.atan2(dir.y, Math.hypot(dir.x, dir.z)), -maxPitch, maxPitch);
      }
      const k = 1 - Math.exp(-dt * 6);
      yawPitch.x += (yaw - yawPitch.x) * k;
      yawPitch.y += (pitch - yawPitch.y) * k;
      model.getWorldQuaternion(rootQ);
      // rotation in character space (faces +Z): yaw about +Y, then look up / down
      delta.setFromEuler(euler.set(-yawPitch.y, yawPitch.x, 0, "YXZ"));
      const worldDelta = rootQ.clone().multiply(delta).multiply(tmpQ.copy(rootQ).invert());
      for (const { bone, weight } of lookBones) {
        const part = ident.clone().slerp(worldDelta, weight);
        bone.parent?.getWorldQuaternion(parentQ);
        bone.getWorldQuaternion(tmpQ);
        bone.quaternion.copy(parentQ.invert().multiply(part.multiply(tmpQ)));
        bone.updateMatrixWorld(true);
      }
    };

    let last = performance.now();
    renderer.setAnimationLoop(() => {
      const now = performance.now();
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (mixer) {
        // the look-at offset is added on top of the animation every frame (reset first for bones no clip moves)
        for (const lb of lookBones) lb.bone.quaternion.copy(lb.base);
        mixer.update(dt);
        for (const lb of lookBones) lb.base.copy(lb.bone.quaternion);
        model?.updateMatrixWorld(true);
        lookAt(dt);
        const bored = byRole("bored");
        if (bored.length && current === actions.get(idleName) && now - lastInput > behavior.bored_after_seconds * 1000) {
          lastInput = now;
          playOnce(bored[Math.floor(Math.random() * bored.length)]);
        }
      }
      renderer.render(scene, camera);
    });

    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      renderer.domElement.removeEventListener("pointerdown", onDown);
      characterEvents.removeEventListener("play", onPlay);
      mixer?.stopAllAction();
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        mesh.geometry.dispose();
        for (const m of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
          (m as THREE.MeshLambertMaterial).map?.dispose();
          m.dispose();
        }
      });
      draco?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={host} className={`absolute inset-0 ${className}`} />;
}
