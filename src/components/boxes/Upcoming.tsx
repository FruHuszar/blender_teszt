// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Upcoming · skin Soft Card · texts: context/personaText.ts → "upcoming" */
export function Upcoming() {
  const t = useText().upcoming;
  return (
    <>
      <span data-el="Upcoming · Title.001" className="pb-title absolute whitespace-pre leading-none left-[min(4.889cqw,4.4cqh)] top-[min(4.889cqw,4.4cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(5.051cqw,4.545cqh))]">{t.title}</span>
      <ul data-el="Upcoming · Upcoming List.001" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden leading-none pb-font-body w-[min(90.222cqw,81.2cqh)] h-[min(91.689cqw,82.52cqh)] text-[length:max(11px,min(4.001cqw,3.601cqh))] text-[color:var(--pb-r-text)] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(4.822cqw,4.34cqh))]">
        {t.upcomingList.slice(0, 5).map((row, i) => (
          <li key={i} className="flex h-[3.8879em] items-center">
            <span className="mr-[0.7998em] grid h-[1.7996em] w-[3.8657em] shrink-0 place-items-center rounded-full bg-[color:color-mix(in_oklab,var(--pb-r-accent)_18%,transparent)] pb-font-title text-[length:0.8656em] text-[color:var(--pb-r-accent)]">{row.tag}</span>
            <span className="min-w-0 truncate">{row.text}</span>
          </li>
        ))}
        {t.upcomingList.length > 5 && (
          <li aria-hidden="true" className="absolute bottom-[0.0933em] left-1/2 flex -translate-x-1/2 gap-[0.3866em]"><i className="size-[0.3466em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3466em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3466em] rounded-full bg-[color:var(--pb-r-accent)]" /></li>
        )}
      </ul>
    </>
  );
}
