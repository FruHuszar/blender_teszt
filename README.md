<!-- Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file -->
# Persona app

React 19 + Tailwind v4 + three.js project exported by Persona Studio (GirliePop + Soft Paper).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/ (relative paths: works in any sub-folder, e.g. GitHub Pages)
npm run preview    # serve the build
```
Node 20.19+ or 22.12+.

## What is in it
| Path | |
|---|---|
| `src/App.tsx` | The screen: backdrop video, character, the boxes in the responsive grid, dock, modal |
| `src/context/personaText.ts` | Every text of the UI, one object per box |
| `src/components/boxes/*.tsx` | One component per box (elements placed like in Blender) |
| `src/components/boxes.ts`, `layout.ts` | Grid placement per breakpoint (base < 768 px <= md < 1024 px <= lg) |
| `src/persona.css` | Fonts, palette, skins, UI preset surfaces |
| `src/character/` | `PersonaCharacter.tsx` (three.js), the GLB and its settings |
| `src/stage/` | `stage.json` (camera per breakpoint, lights), backdrop loops, posters, foreground |
| `src/assets/` | Fonts (SIL OFL), images, 3D snapshots |

Re-exporting from Blender rewrites the generated files (they start with `// Persona Studio export`).
`package.json` only gets missing entries added; `vite.config.ts`, `tsconfig.json`, `index.html`,
`src/main.tsx` and `src/index.css` are written once, so your edits there are kept.

## Texts
```tsx
<App text={{ todo: { title: "Today", questList: [{ text: "Gym", done: false }] } }} />
```
Anything you leave out keeps the text from `personaText.ts`. Inside your own components: `useText()`.

## Character
The character is drawn by three.js with the camera of each breakpoint, the key / fill / rim lights,
the toon look and outline from Blender. It plays the main idle, a *bored* clip after a while without
input, a *click* clip when you click her, and her head follows the pointer. Play any clip yourself:
```ts
import { playCharacterClip } from "./character/characterEvents";
playCharacterClip("task_complete");
```

## Use it inside another React app
Copy `src/` (or a part of it) into your project, install `three` and Tailwind v4 (`tailwindcss`,
`@tailwindcss/vite`), add `tailwindcss()` to the Vite plugins and `@import "tailwindcss";` to your CSS,
then render `<App />` in a full-screen container.
