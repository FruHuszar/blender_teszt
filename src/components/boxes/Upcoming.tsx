// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Upcoming · skin Ivy Card · texts: context/personaText.ts → "upcoming" */
export function Upcoming() {
  const t = useText().upcoming;
  return (
    <>
      <span data-el="Upcoming · Title" className="pb-title absolute whitespace-pre leading-none left-[min(10.913cqw,13.297cqh)] top-[min(5.345cqw,6.513cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.043cqw,4.927cqh))]">{t.title}</span>
      <ul data-el="Upcoming · Upcoming List" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden leading-none pb-font-body w-[min(89.31cqw,108.82cqh)] h-[min(62.751cqw,76.459cqh)] text-[length:max(11px,min(3.337cqw,4.066cqh))] text-[color:var(--pb-r-text)] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(4.315cqw,5.258cqh))]">
        {t.upcomingList.slice(0, 5).map((row, i) => (
          <li key={i} className="flex h-[3.419em] items-center">
            <span className="mr-[0.8616em] grid h-[1.9386em] w-[4.1644em] shrink-0 place-items-center rounded-full bg-[color:color-mix(in_oklab,var(--pb-r-accent)_18%,transparent)] pb-font-title text-[length:0.8343em] text-[color:var(--pb-r-accent)]">{row.tag}</span>
            <span className="min-w-0 truncate">{row.text}</span>
          </li>
        ))}
        {t.upcomingList.length > 5 && (
          <li aria-hidden="true" className="absolute bottom-[0.1005em] left-1/2 flex -translate-x-1/2 gap-[0.4164em]"><i className="size-[0.3734em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3734em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3734em] rounded-full bg-[color:var(--pb-r-accent)]" /></li>
        )}
      </ul>
    </>
  );
}
