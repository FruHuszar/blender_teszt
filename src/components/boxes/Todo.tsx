// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Daily Quests · skin Soft Card · texts: context/personaText.ts → "todo" */
export function Todo() {
  const t = useText().todo;
  return (
    <>
      <span data-el="Daily Quests · Title" className="pb-title absolute whitespace-pre leading-none left-[min(4.889cqw,4.4cqh)] top-[min(4.889cqw,4.4cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(5.051cqw,4.545cqh))]">{t.title}</span>
      <ul data-el="Daily Quests · Quest List" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden leading-none pb-font-body w-[min(90.222cqw,81.2cqh)] h-[min(91.689cqw,82.52cqh)] text-[length:max(11px,min(3.955cqw,3.56cqh))] text-[color:var(--pb-r-text)] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(4.822cqw,4.34cqh))]">
        {t.questList.slice(0, 8).map((row, i) => (
          <li key={i} className="flex h-[2.8978em] items-center">
            {row.done ? (
              <span className="pb-bub mr-[.714em] size-[1em] shrink-0 rounded-full text-[length:1.1197em] [--c:var(--pb-r-accent)]" />
            ) : (
              <span className="pb-ring mr-[.714em] size-[1em] shrink-0 rounded-full text-[length:1.1197em] [--c:var(--pb-r-accent)]" />
            )}
            <span className={`min-w-0 truncate${row.done ? " opacity-55" : ""}`}>{row.text}</span>
          </li>
        ))}
        {t.questList.length > 8 && (
          <li aria-hidden="true" className="absolute bottom-[0.0933em] left-1/2 flex -translate-x-1/2 gap-[0.3866em]"><i className="size-[0.3466em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3466em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3466em] rounded-full bg-[color:var(--pb-r-accent)]" /></li>
        )}
      </ul>
    </>
  );
}
