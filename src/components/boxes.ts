// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
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
    skin: "pb-tok-soft-pill pb-pre-paper pb-shape-pill",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    radius: "[--pb-radius:28px]",
    box: "flex col-start-1 col-span-4 row-start-1 row-span-1 md:col-start-1 md:col-span-8 md:row-start-1 md:row-span-1 lg:col-start-1 lg:col-span-11 lg:row-start-1 lg:row-span-1",
    chip: "hidden",
    icon: "USER",
    Content: Header,
  },
  {
    key: "todo",
    skin: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    radius: "[--pb-radius:28px]",
    box: "flex col-start-1 col-span-4 row-start-9 row-span-4 md:col-start-1 md:col-span-4 md:row-start-8 md:row-span-3 lg:col-start-1 lg:col-span-3 lg:row-start-2 lg:row-span-4",
    chip: "hidden",
    icon: "CHECK",
    Content: Todo,
  },
  {
    key: "streak",
    skin: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    radius: "[--pb-radius:28px]",
    box: "hidden lg:flex lg:col-start-10 lg:col-span-3 lg:row-start-4 lg:row-span-3",
    chip: "flex lg:hidden",
    icon: "FLAME",
    Content: Streak,
  },
  {
    key: "music",
    skin: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    radius: "[--pb-radius:28px]",
    box: "hidden lg:flex lg:col-start-10 lg:col-span-3 lg:row-start-6 lg:row-span-3",
    chip: "flex lg:hidden",
    icon: "NOTE",
    Content: Music,
  },
  {
    key: "upcoming",
    skin: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    radius: "[--pb-radius:28px]",
    box: "hidden md:flex md:col-start-5 md:col-span-4 md:row-start-8 md:row-span-3 lg:col-start-10 lg:col-span-3 lg:row-start-2 lg:row-span-4",
    chip: "flex md:hidden",
    icon: "CALENDAR",
    Content: Upcoming,
  },
  {
    key: "radar",
    skin: "pb-tok-soft-circle pb-pre-paper pb-shape-circle",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    aspect: "1/1",
    radius: "[--pb-radius:28px]",
    box: "hidden lg:flex lg:col-start-8 lg:col-span-2 lg:row-start-6 lg:row-span-3",
    chip: "flex lg:hidden",
    icon: "CHART",
    Content: Radar,
  },
  {
    key: "settings",
    skin: "pb-tok-candy-btn pb-pre-paper pb-shape-circle pb-pre-btn",
    modal: "pb-tok-soft-card pb-pre-paper pb-shape-rect",
    aspect: "1/1",
    radius: "[--pb-radius:28px]",
    box: "hidden lg:flex lg:col-start-12 lg:col-span-1 lg:row-start-1 lg:row-span-1",
    chip: "flex lg:hidden",
    icon: "GEAR",
    Content: Settings,
  },
];
