// Persona Studio export · Neon City + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Streak · skin Neon Card · texts: context/personaText.ts → "streak" */
export function Streak() {
  const t = useText().streak;
  return (
    <>
      <span data-el="Streak · Title" className="pb-title absolute whitespace-pre leading-none left-[min(9.203cqw,17.206cqh)] top-[min(4.873cqw,9.11cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(2.294cqw,4.289cqh))]">{t.title}</span>
      <span data-el="Streak · Count" className="absolute whitespace-pre leading-none left-[min(4.873cqw,9.11cqh)] top-[min(8.441cqw,15.781cqh)] pb-font-title text-[color:var(--pb-r-accent)] text-[length:max(11px,min(18.304cqw,34.221cqh))]">{t.count}</span>
      <span data-el="Streak · Unit" className="absolute whitespace-pre leading-none left-[min(36.766cqw,68.737cqh)] top-[min(22.793cqw,42.614cqh)] pb-font-body text-[color:var(--pb-r-sub)] text-[length:max(11px,min(5.72cqw,10.694cqh))] opacity-[0.75]">{t.unit}</span>
      <div data-el="Streak · Week" className="absolute -translate-x-1/2 -translate-y-1/2 w-[min(68.439cqw,127.95cqh)] h-[min(6.645cqw,12.422cqh)] left-[min(39.092cqw,73.085cqh)] top-[calc(100%_-_min(8.195cqw,15.321cqh))] flex items-center gap-x-[.55em] text-[length:min(6.645cqw,12.422cqh)]">
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
