// Persona Studio export · Procedural Garden · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";
import { Icon } from "../Icon";

/** Header · skin Ivy Pill · texts: context/personaText.ts → "header" */
export function Header() {
  const t = useText().header;
  return (
    <>
      <span data-el="Header · Avatar" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(19.178cqw,76.712cqh)] h-[min(19.178cqw,76.712cqh)] text-[length:min(19.178cqw,76.712cqh)] left-[min(16.438cqw,65.753cqh)] top-[calc(50%_+_min(0cqw,0cqh))] pb-bub rounded-full [--c:var(--pb-r-accent)]">
        <Icon name="USER" glyph="var(--pb-ivory)" hub="var(--pb-r-accent)" className="size-[58%] overflow-visible" />
      </span>
      <span data-el="Header · Name" className="absolute whitespace-pre leading-none left-[min(30.523cqw,122.091cqh)] top-[min(5.615cqw,22.459cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.63cqw,18.52cqh))]">{t.name}</span>
      <span data-el="Header · Level" className="absolute whitespace-pre leading-none left-[min(47.736cqw,190.945cqh)] top-[min(6.252cqw,25.009cqh)] pb-font-title text-[color:var(--pb-r-accent)] text-[length:max(11px,min(3.704cqw,14.816cqh))]">{t.level}</span>
      <div data-el="Header · XP Bar" className="absolute -translate-x-1/2 -translate-y-1/2 w-[min(68.493cqw,273.973cqh)] h-[min(2.452cqw,9.808cqh)] left-[min(64.769cqw,259.078cqh)] top-[calc(100%_-_min(9.231cqw,36.922cqh))] pb-track rounded-full [--c:var(--pb-r-track)] text-[length:min(2.452cqw,9.808cqh)]">
        <div className="pb-fill h-full rounded-full [--c:var(--pb-r-accent)]" style={{ width: "max(1em, 62%)" }} />
      </div>
      <span data-el="Header · Shop" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(16.438cqw,65.753cqh)] h-[min(16.438cqw,65.753cqh)] text-[length:min(16.438cqw,65.753cqh)] left-[calc(100%_-_min(15.068cqw,60.274cqh))] top-[calc(50%_+_min(0cqw,0cqh))] pb-rbub rounded-[26%] [--c:var(--pb-r-accent)]">
        <Icon name="BASKET" glyph="var(--pb-ivory)" hub="var(--pb-r-accent)" className="size-[58%] overflow-visible" />
      </span>
      <span data-el="Header · Coin" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(8.219cqw,32.877cqh)] h-[min(8.219cqw,32.877cqh)] text-[length:min(8.219cqw,32.877cqh)] left-[calc(100%_-_min(30.594cqw,122.374cqh))] top-[calc(50%_+_min(0cqw,0cqh))]">
        <Icon name="COIN" glyph="var(--pb-gold)" hub="var(--pb-void)" className="size-full overflow-visible" />
      </span>
      <span data-el="Header · Coins" className="absolute whitespace-pre leading-none left-[calc(100%_-_min(36.53cqw,146.119cqh))] top-[min(9.312cqw,37.249cqh)] -translate-x-full pb-font-title text-[color:var(--pb-r-text)] text-[length:max(11px,min(4.167cqw,16.668cqh))]">{t.coins}</span>
    </>
  );
}
