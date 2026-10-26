// Persona Studio export · Neon City · 2026-10-26 · re-export overwrites this file
import type { Box } from "./types";
import { Header } from "./boxes/Header";
import { Todo } from "./boxes/Todo";
import { Streak } from "./boxes/Streak";
import { Music } from "./boxes/Music";
import { Upcoming } from "./boxes/Upcoming";
import { Radar } from "./boxes/Radar";
import { Settings } from "./boxes/Settings";

/** Every component of the scene, in draw order. */
export const BOXES: Box[] = [
  {
    key: "header",
    skin: "pb-tok-ivy-pill pb-skin-ivy-pill pb-att-ivy-pill",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    radius: "[--pb-radius:20px]",
    box: "flex col-start-1 col-span-4 row-start-1 row-span-1 md:col-start-1 md:col-span-8 md:row-start-1 md:row-span-1 lg:col-start-1 lg:col-span-12 lg:row-start-1 lg:row-span-1",
    chip: "hidden",
    icon: "USER",
    Content: Header,
  },
  {
    key: "todo",
    skin: "pb-tok-neon-card pb-skin-neon-card",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    radius: "[--pb-radius:20px]",
    box: "flex col-start-1 col-span-4 row-start-9 row-span-4 md:col-start-1 md:col-span-4 md:row-start-8 md:row-span-3 lg:col-start-1 lg:col-span-3 lg:row-start-2 lg:row-span-3",
    chip: "hidden",
    icon: "CHECK",
    Content: Todo,
  },
  {
    key: "streak",
    skin: "pb-tok-neon-card pb-skin-neon-card",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    radius: "[--pb-radius:20px]",
    box: "hidden lg:flex lg:col-start-1 lg:col-span-3 lg:row-start-6 lg:row-span-3",
    chip: "flex lg:hidden",
    icon: "FLAME",
    Content: Streak,
  },
  {
    key: "music",
    skin: "pb-tok-neon-pill pb-skin-neon-pill",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    radius: "[--pb-radius:20px]",
    box: "hidden lg:flex lg:col-start-5 lg:col-span-4 lg:row-start-8 lg:row-span-1",
    chip: "flex lg:hidden",
    icon: "NOTE",
    Content: Music,
  },
  {
    key: "upcoming",
    skin: "pb-tok-neon-card pb-skin-neon-card",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    radius: "[--pb-radius:20px]",
    box: "hidden md:flex md:col-start-5 md:col-span-4 md:row-start-8 md:row-span-3 lg:col-start-10 lg:col-span-3 lg:row-start-2 lg:row-span-3",
    chip: "flex md:hidden",
    icon: "CALENDAR",
    Content: Upcoming,
  },
  {
    key: "radar",
    skin: "pb-tok-neon-circle pb-skin-neon-circle",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    aspect: "1/1",
    radius: "[--pb-radius:20px]",
    box: "hidden lg:flex lg:col-start-10 lg:col-span-3 lg:row-start-5 lg:row-span-3",
    chip: "flex lg:hidden",
    icon: "CHART",
    Content: Radar,
  },
  {
    key: "settings",
    skin: "pb-tok-neon-btn pb-skin-neon-btn",
    modal: "pb-tok-neon-card pb-skin-neon-card",
    aspect: "1/1",
    radius: "[--pb-radius:20px]",
    box: "hidden lg:flex lg:col-start-12 lg:col-span-1 lg:row-start-8 lg:row-span-1",
    chip: "flex lg:hidden",
    icon: "GEAR",
    Content: Settings,
  },
];
