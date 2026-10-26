// Persona Studio export · Neon City · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Daily Quests · skin Neon Card · texts: context/personaText.ts → "todo" */
export function Todo() {
  const t = useText().todo;
  return (
    <>
      <span data-el="Daily Quests · Title" className="pb-title absolute whitespace-pre leading-none left-[min(12.451cqw,11.221cqh)] top-[min(4.873cqw,4.391cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.015cqw,3.618cqh))]">{t.title}</span>
      <ul data-el="Daily Quests · Quest List" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden leading-none pb-font-body w-[min(90.255cqw,81.337cqh)] h-[min(92.183cqw,83.075cqh)] text-[length:max(11px,min(3.802cqw,3.427cqh))] text-[color:var(--pb-r-text)] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(4.518cqw,4.071cqh))]">
        {t.questList.slice(0, 8).map((row, i) => (
          <li key={i} className="flex h-[3.0304em] items-center">
            {row.done ? (
              <span className="pb-bub mr-[.714em] size-[1em] shrink-0 rounded-full text-[length:1.171em] [--c:var(--pb-r-accent)]" />
            ) : (
              <span className="pb-ring mr-[.714em] size-[1em] shrink-0 rounded-full text-[length:1.171em] [--c:var(--pb-r-accent)]" />
            )}
            <span className={`min-w-0 truncate${row.done ? " opacity-55" : ""}`}>{row.text}</span>
          </li>
        ))}
        {t.questList.length > 8 && (
          <li aria-hidden="true" className="absolute bottom-[0.0976em] left-1/2 flex -translate-x-1/2 gap-[0.4043em]"><i className="size-[0.3624em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3624em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3624em] rounded-full bg-[color:var(--pb-r-accent)]" /></li>
        )}
      </ul>
    </>
  );
}
