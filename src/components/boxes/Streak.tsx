// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Streak · skin Soft Card · texts: context/personaText.ts → "streak" */
export function Streak() {
  const t = useText().streak;
  return (
    <>
      <span data-el="Streak · Title" className="pb-title absolute whitespace-pre leading-none left-[min(4.889cqw,5.946cqh)] top-[min(4.889cqw,5.946cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.41cqw,5.364cqh))]">{t.title}</span>
      <span data-el="Streak · Count" className="absolute whitespace-pre leading-none left-[min(4.889cqw,5.946cqh)] top-[min(11.711cqw,14.243cqh)] pb-font-title text-[color:var(--pb-r-accent)] text-[length:max(11px,min(21.645cqw,26.325cqh))]">{t.count}</span>
      <span data-el="Streak · Unit" className="absolute whitespace-pre leading-none left-[min(36.889cqw,44.865cqh)] top-[min(26.111cqw,31.756cqh)] pb-font-body text-[color:var(--pb-r-sub)] text-[length:max(11px,min(6.002cqw,7.299cqh))] opacity-[0.75]">{t.unit}</span>
      <div data-el="Streak · Week" className="absolute -translate-x-1/2 -translate-y-1/2 w-[min(68.667cqw,83.514cqh)] h-[min(6.667cqw,8.108cqh)] left-[min(39.222cqw,47.703cqh)] top-[calc(100%_-_min(8.222cqw,10cqh))] flex items-center gap-x-[.55em] text-[length:min(6.667cqw,8.108cqh)]">
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
