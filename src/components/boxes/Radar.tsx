// Persona Studio export · Neon City · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";
import { RadarChart } from "../RadarChart";

/** Stats · skin Neon Circle · texts: context/personaText.ts → "radar" */
export function Radar() {
  const t = useText().radar;
  return (
    <>
      <span data-el="Stats · Title" className="pb-title absolute whitespace-pre leading-none left-[calc(50%_+_min(0cqw,0cqh))] top-[min(18cqw,18cqh)] -translate-x-1/2 pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(3.107cqw,3.107cqh))]">{t.title}</span>
      <RadarChart dataEl="Stats · Radar" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-visible pb-font-body w-[max(204.45px,min(57.006cqw,57.006cqh))] h-[max(204.45px,min(57.006cqw,57.006cqh))] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(3.497cqw,3.497cqh))]" items={t.radar} size={211.64} radius={75.66} font={11.39} gap={9.52} accent="var(--pb-r-accent)" track="var(--pb-r-track)" label="var(--pb-r-sub)" />
    </>
  );
}
