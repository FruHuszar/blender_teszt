// Persona Studio export · character events · re-export overwrites this file
//
// Play any exported clip from anywhere in the app, e.g. when a quest is completed:
//   import { playCharacterClip } from "./character/characterEvents";
//   playCharacterClip("task_complete");
// One-shot clips return to the main idle by themselves.

export const characterEvents = new EventTarget();

export function playCharacterClip(name: string) {
  characterEvents.dispatchEvent(new CustomEvent<string>("play", { detail: name }));
}
