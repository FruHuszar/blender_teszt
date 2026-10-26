// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { PERSONA_TEXT, type PersonaText } from "./personaText";

/** Partial texts per box; anything left out keeps the exported default. */
export type PersonaTextOverrides = { [K in keyof PersonaText]?: Partial<PersonaText[K]> };

const TextContext = createContext<PersonaText>(PERSONA_TEXT);

export function PersonaTextProvider({ text, children }: { text?: PersonaTextOverrides; children: ReactNode }) {
  const value = useMemo(() => {
    if (!text) return PERSONA_TEXT;
    const merged: Record<string, object> = { ...PERSONA_TEXT };
    for (const [key, part] of Object.entries(text)) merged[key] = { ...merged[key], ...part };
    return merged as PersonaText;
  }, [text]);
  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
}

/** All texts (defaults merged with the provider's overrides). */
export function useText(): PersonaText {
  return useContext(TextContext);
}
