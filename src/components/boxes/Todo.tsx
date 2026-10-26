// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";

/** Daily Quests · skin Ivy Card · texts: context/personaText.ts → "todo" */
export function Todo() {
  const t = useText().todo;
  return (
    <>
      <span data-el="Daily Quests · Title" className="pb-title absolute whitespace-pre leading-none left-[min(11.831cqw,10.667cqh)] top-[min(5.345cqw,4.819cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.71cqw,4.246cqh))]">{t.title}</span>
      <ul data-el="Daily Quests · Quest List" className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden leading-none pb-font-body w-[min(89.31cqw,80.522cqh)] h-[min(90.17cqw,81.298cqh)] text-[length:max(11px,min(3.611cqw,3.255cqh))] text-[color:var(--pb-r-text)] left-[calc(50%_+_min(0cqw,0cqh))] top-[calc(50%_+_min(5.026cqw,4.532cqh))]">
        {t.questList.slice(0, 8).map((row, i) => (
          <li key={i} className="flex h-[3.1217em] items-center">
            {row.done ? (
              <span className="pb-bub mr-[.714em] size-[1em] shrink-0 rounded-full text-[length:1.2062em] [--c:var(--pb-r-accent)]" />
            ) : (
              <span className="pb-ring mr-[.714em] size-[1em] shrink-0 rounded-full text-[length:1.2062em] [--c:var(--pb-r-accent)]" />
            )}
            <span className={`min-w-0 truncate${row.done ? " opacity-55" : ""}`}>{row.text}</span>
          </li>
        ))}
        {t.questList.length > 8 && (
          <li aria-hidden="true" className="absolute bottom-[0.1005em] left-1/2 flex -translate-x-1/2 gap-[0.4164em]"><i className="size-[0.3734em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3734em] rounded-full bg-[color:var(--pb-r-accent)]" /><i className="size-[0.3734em] rounded-full bg-[color:var(--pb-r-accent)]" /></li>
        )}
      </ul>
    </>
  );
}
