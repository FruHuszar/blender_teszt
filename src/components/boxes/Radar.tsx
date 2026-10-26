// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";
import { RadarChart } from "../RadarChart";

/** Stats · skin Ivy Circle · texts: context/personaText.ts → "radar" */
export function Radar() {
  const t = useText().radar;
  return (
    <>
      <span data-el="Stats · Title" className="pb-title absolute whitespace-pre leading-none left-[calc(50%_+_min(0cqw,0cqh))] top-[min(18cqw,18cqh)] -translate-x-1/2 pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(3.625cqw,3.625cqh))]">{t.title}</span>
      <RadarChart dataEl="Stats · Radar" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-visible pb-font-body w-[max(210.61px,min(56.262cqw,56.262cqh))] h-[max(210.61px,min(56.262cqw,56.262cqh))] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(3.869cqw,3.869cqh))]" items={t.radar} size={207.33} radius={74.12} font={10.83} gap={9.33} accent="var(--pb-r-accent)" track="var(--pb-r-track)" label="var(--pb-r-sub)" />
    </>
  );
}
