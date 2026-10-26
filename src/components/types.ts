// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import type { ComponentType } from "react";
import type { BoxKey } from "../context/personaText";
import type { IconName } from "./Icon";

export type Box = {
  /** component key (also its entry in context/personaText.ts) */
  key: BoxKey;
  /** surface classes: role colours + skin look or UI preset + attachments (persona.css) */
  skin: string;
  /** surface classes when the box opens as a modal */
  modal: string;
  /** fixed aspect for round / fitted skins */
  aspect?: string;
  /** corner radius variable */
  radius: string;
  /** grid placement, Free offsets / scales and tilt per breakpoint */
  box: string;
  /** visibility of the chip in the dock per breakpoint */
  chip: string;
  icon: IconName;
  Content: ComponentType;
};
