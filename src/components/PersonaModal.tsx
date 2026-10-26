// Persona Studio export · Neon City + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useEffect, useRef } from "react";
import { useText } from "../context/PersonaTextContext";
import { Icon } from "./Icon";
import type { Box } from "./types";

/** The box of a chip, opened in a <dialog>. */
export function PersonaModal({ box, onClose }: { box: Box | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const text = useText();

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (box && !d.open) d.showModal();
    if (!box && d.open) d.close();
  }, [box]);

  return (
    <dialog
      ref={dialog}
      className="pb-modal pb-ui m-auto"
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && onClose()}
    >
      {box && (
        <section
          aria-label={text[box.key].title}
          className={`pb-skin ${box.modal} ${box.radius} relative h-[min(620px,calc(100dvh-96px))] w-[min(720px,calc(100vw-32px))] [container-type:size]`}
        >
          <box.Content />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-[13px] top-[13px] grid size-[26px] place-items-center rounded-full bg-[color:var(--pb-r-accent)]"
          >
            <Icon name="CLOSE" glyph="var(--pb-ivory)" hub="var(--pb-ivory)" className="size-[12px]" />
          </button>
        </section>
      )}
    </dialog>
  );
}
