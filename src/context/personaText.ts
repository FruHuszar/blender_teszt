// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
// ALL texts of the UI, one object per box (keys match the Blender components).
// Edit them here, or override any of them at runtime: <App text={{ todo: { title: "Today" } }} />

export type CheckRow = { text: string; done: boolean };
export type TagRow = { tag: string; text: string };
export type TextRow = { text: string };
export type RadarAxis = { label: string; value: number };

export const PERSONA_TEXT = {
  header: {
    title: "Header",
    name: "Mira",
    level: "Lv 12",
    coins: "1,240",
  },
  todo: {
    title: "Daily Quests",
    questList: [
      { text: "Morning stretch", done: true },
      { text: "Read 20 pages", done: false },
      { text: "Water the plants", done: true },
      { text: "Study React hooks", done: false },
      { text: "Drink 2L water", done: false },
      { text: "Journal 5 minutes", done: false },
      { text: "Clean the desk", done: false },
      { text: "Call grandma", done: false },
    ] as CheckRow[],
  },
  streak: {
    title: "Streak",
    count: "12",
    unit: "days",
  },
  music: {
    title: "Vibe",
  },
  upcoming: {
    title: "Upcoming",
    upcomingList: [
      { tag: "Mon", text: "Laravel API test" },
      { tag: "Tue", text: "Team meeting" },
      { tag: "Thu", text: "Dentist" },
      { tag: "Fri", text: "Submit thesis draft" },
      { tag: "Sat", text: "Gym" },
    ] as TagRow[],
  },
  radar: {
    title: "Stats",
    radar: [
      { label: "Focus", value: 0.8 },
      { label: "Health", value: 0.55 },
      { label: "Mind", value: 0.7 },
      { label: "Social", value: 0.45 },
      { label: "Craft", value: 0.65 },
    ] as RadarAxis[],
  },
  settings: {
    title: "Settings",
  },
};

export type PersonaText = typeof PERSONA_TEXT;
export type BoxKey = keyof PersonaText;
