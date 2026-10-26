// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";
import { RadarChart } from "../RadarChart";

/** Stats · skin Soft Circle · texts: context/personaText.ts → "radar" */
export function Radar() {
  const t = useText().radar;
  return (
    <>
      <span data-el="Stats · Title.001" className="pb-title absolute whitespace-pre leading-none left-[calc(50%_+_min(0cqw,0cqh))] top-[min(18cqw,18cqh)] -translate-x-1/2 pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.427cqw,4.427cqh))]">{t.title}</span>
      <RadarChart dataEl="Stats · Radar.001" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-visible pb-font-body w-[max(195.51px,min(55.545cqw,55.545cqh))] h-[max(195.51px,min(55.545cqw,55.545cqh))] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(4.227cqw,4.227cqh))]" items={t.radar} size={162.93} radius={58.25} font={9.17} gap={7.33} accent="var(--pb-r-accent)" track="var(--pb-r-track)" label="var(--pb-r-sub)" />
    </>
  );
}
