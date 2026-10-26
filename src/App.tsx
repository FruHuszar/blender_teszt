// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
// Run the project: npm install, then npm run dev (see README.md).
import "./persona.css";
import { useState } from "react";
import { PersonaTextProvider, type PersonaTextOverrides } from "./context/PersonaTextContext";
import { BOXES } from "./components/boxes";
import { ROOT } from "./components/layout";
import { PersonaDock } from "./components/PersonaDock";
import { PersonaModal } from "./components/PersonaModal";
import { PersonaPanel } from "./components/PersonaPanel";
import type { Box } from "./components/types";
import { PersonaCharacter } from "./character/PersonaCharacter";
import assetBglandscapeposter from "./stage/bg_landscape_poster.jpg";
import assetBglandscape from "./stage/bg_landscape.mp4";
import assetFglandscape from "./stage/fg_landscape.png";
import assetBgportraitposter from "./stage/bg_portrait_poster.jpg";
import assetBgportrait from "./stage/bg_portrait.mp4";
import assetFgportrait from "./stage/fg_portrait.png";

/** The whole Persona screen. `text` overrides any text of context/personaText.ts. */
export default function App({ text }: { text?: PersonaTextOverrides }) {
  const [open, setOpen] = useState<Box["key"] | null>(null);
  const active = BOXES.find((b) => b.key === open) ?? null;

  return (
    <PersonaTextProvider text={text}>
      <div className="pb-app relative h-dvh w-full overflow-hidden bg-[color:var(--pb-deep)]">
        <video className="pointer-events-none absolute inset-0 size-full object-cover portrait:hidden" src={assetBglandscape} poster={assetBglandscapeposter} autoPlay loop muted playsInline />
        <video className="pointer-events-none absolute inset-0 size-full object-cover landscape:hidden" src={assetBgportrait} poster={assetBgportraitposter} autoPlay loop muted playsInline />
        <PersonaCharacter />
        <img className="pointer-events-none absolute inset-0 size-full object-cover portrait:hidden" src={assetFglandscape} alt="" />
        <img className="pointer-events-none absolute inset-0 size-full object-cover landscape:hidden" src={assetFgportrait} alt="" />
        <div className="pb-grain" />
        <div className={ROOT}>
          {BOXES.map((b) => (
            <PersonaPanel key={b.key} box={b} />
          ))}
          <PersonaDock boxes={BOXES} onOpen={setOpen} />
        </div>
        <PersonaModal box={active} onClose={() => setOpen(null)} />
      </div>
    </PersonaTextProvider>
  );
}
