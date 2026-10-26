// Persona Studio export · Neon City + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Upcoming · skin Neon Card · texts: context/personaText.ts → "upcoming" */
export function Upcoming() {
  const t = useText().upcoming;
  return (
    <>
      <span data-el="Upcoming · Title" className="pb-title absolute whitespace-pre leading-none left-[min(11.515cqw,14.005cqh)] top-[min(4.873cqw,5.926cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(3.519cqw,4.28cqh))]">{t.title}</span>
      <ul data-el="Upcoming · Upcoming List" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden leading-none pb-font-body w-[min(90.255cqw,109.764cqh)] h-[min(64.56cqw,78.516cqh)] text-[length:max(11px,min(3.537cqw,4.301cqh))] text-[color:var(--pb-r-text)] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(3.96cqw,4.816cqh))]">
        {t.upcomingList.slice(0, 5).map((row, i) => (
          <li key={i} className="flex h-[3.319em] items-center">
            <span className="mr-[0.8364em] grid h-[1.8819em] w-[4.0426em] shrink-0 place-items-center rounded-full bg-[color:color-mix(in_oklab,var(--pb-r-accent)_18%,transparent)] pb-font-title text-[length:0.768em] text-[color:var(--pb-r-accent)]">{row.tag}</span>
            <span className="min-w-0 truncate">{row.text}</span>
          </li>
        ))}
        {t.upcomingList.length > 5 && (
          <li aria-hidden="true" className="absolute bottom-[0.0976em] left-1/2 flex -translate-x-1/2 gap-[0.4043em]"><i className="size-[0.3624em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3624em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3624em] rounded-full bg-[color:var(--pb-r-accent)]" /></li>
        )}
      </ul>
    </>
  );
}
