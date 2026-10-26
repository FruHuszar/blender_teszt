// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Streak · skin Ivy Card · texts: context/personaText.ts → "streak" */
export function Streak() {
  const t = useText().streak;
  return (
    <>
      <span data-el="Streak · Title" className="pb-title absolute whitespace-pre leading-none left-[min(9.051cqw,17.004cqh)] top-[min(5.345cqw,10.042cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(2.691cqw,5.056cqh))]">{t.title}</span>
      <span data-el="Streak · Count" className="absolute whitespace-pre leading-none left-[min(5.345cqw,10.042cqh)] top-[min(9.486cqw,17.821cqh)] pb-font-title text-[color:var(--pb-r-accent)] text-[length:max(11px,min(19.409cqw,36.463cqh))]">{t.count}</span>
      <span data-el="Streak · Unit" className="absolute whitespace-pre leading-none left-[min(37.416cqw,70.293cqh)] top-[min(23.918cqw,44.934cqh)] pb-font-body text-[color:var(--pb-r-sub)] text-[length:max(11px,min(5.583cqw,10.489cqh))] opacity-[0.75]">{t.unit}</span>
      <div data-el="Streak · Week" className="absolute -translate-x-1/2 -translate-y-1/2 w-[min(68.82cqw,129.289cqh)] h-[min(6.682cqw,12.552cqh)] left-[min(39.755cqw,74.686cqh)] top-[calc(100%_-_min(8.686cqw,16.318cqh))] flex items-center gap-x-[.55em] text-[length:min(6.682cqw,12.552cqh)]">
        <i className="size-[1em] shrink-0 rounded-full pb-bub [--c:var(--pb-r-accent)]" />
        <i className="size-[1em] shrink-0 rounded-full pb-bub [--c:var(--pb-r-accent)]" />
        <i className="size-[1em] shrink-0 rounded-full pb-bub [--c:var(--pb-r-accent)]" />
        <i className="size-[1em] shrink-0 rounded-full pb-bub [--c:var(--pb-r-accent)]" />
        <i className="size-[1em] shrink-0 rounded-full pb-bub [--c:var(--pb-r-accent)]" />
        <i className="size-[1em] shrink-0 rounded-full pb-ring [--c:var(--pb-r-accent)]" />
        <i className="size-[1em] shrink-0 rounded-full pb-ring [--c:var(--pb-r-accent)]" />
      </div>
    </>
  );
}
