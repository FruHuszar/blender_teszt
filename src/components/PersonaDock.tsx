// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../context/PersonaTextContext";
import { Icon } from "./Icon";
import { CHIP_ICON, CHIP_SIZE, CHIP_SKIN, DOCK } from "./layout";
import type { Box } from "./types";

/** Round buttons for the boxes that are chips at the current breakpoint; a click opens the box as a modal. */
export function PersonaDock({ boxes, onOpen }: { boxes: Box[]; onOpen: (key: Box["key"]) => void }) {
  const text = useText();
  return (
    <nav className={DOCK} aria-label="Quick panels">
      {boxes.map((b) => (
        <button
          key={b.key}
          type="button"
          onClick={() => onOpen(b.key)}
          aria-label={text[b.key].title}
          title={text[b.key].title}
          className={`pb-skin ${CHIP_SKIN} pointer-events-auto relative aspect-square max-h-full max-w-full shrink-0 ${CHIP_SIZE} ${b.chip}`}
        >
          <Icon name={b.icon} glyph="var(--pb-r-glyph)" hub="var(--pb-r-hub)" className={CHIP_ICON} />
        </button>
      ))}
    </nav>
  );
}
