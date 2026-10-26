// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
import type { CSSProperties } from "react";
import { useText } from "../context/PersonaTextContext";
import type { Box } from "./types";

/** One box in the grid: the skin surface, sized by its grid cell (round / fitted skins keep their aspect). */
export function PersonaPanel({ box: b }: { box: Box }) {
  const title = useText()[b.key].title;
  const section = (
    <section
      aria-label={title}
      className={`pb-skin ${b.skin} ${b.radius} pointer-events-auto relative size-full [container-type:size]`}
    >
      <b.Content />
    </section>
  );
  if (b.aspect) {
    const fit: CSSProperties = { aspectRatio: b.aspect, width: `min(100cqw, calc(100cqh * ${b.aspect}))` };
    return (
      <div className={`${b.box} min-h-0 min-w-0 items-center justify-center [container-type:size]`}>
        <div style={fit}>{section}</div>
      </div>
    );
  }
  return <div className={`${b.box} min-h-0 min-w-0`}>{section}</div>;
}
