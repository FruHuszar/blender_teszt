// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";
import { Icon } from "../Icon";

/** Header · skin Soft Pill · texts: context/personaText.ts → "header" */
export function Header() {
  const t = useText().header;
  return (
    <>
      <span data-el="Header · Avatar" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(19.091cqw,76.364cqh)] h-[min(19.091cqw,76.364cqh)] text-[length:min(19.091cqw,76.364cqh)] left-[min(15.909cqw,63.636cqh)] top-[calc(50%_+_min(0cqw,0cqh))] pb-bub rounded-full [--c:var(--pb-r-accent)]">
        <Icon name="USER" glyph="var(--pb-ivory)" hub="var(--pb-r-accent)" className="size-[58%] overflow-visible" />
      </span>
      <span data-el="Header · Name" className="absolute whitespace-pre leading-none left-[min(29.955cqw,119.818cqh)] top-[min(5.873cqw,23.491cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(4.981cqw,19.923cqh))]">{t.name}</span>
      <span data-el="Header · Level" className="absolute whitespace-pre leading-none left-[min(46.523cqw,186.091cqh)] top-[min(6.486cqw,25.945cqh)] pb-font-title text-[color:var(--pb-r-accent)] text-[length:max(11px,min(3.985cqw,15.939cqh))]">{t.level}</span>
      <div data-el="Header · XP Bar" className="absolute -translate-x-1/2 -translate-y-1/2 w-[min(68.182cqw,272.727cqh)] h-[min(2.455cqw,9.818cqh)] left-[min(64.045cqw,256.182cqh)] top-[calc(100%_-_min(9.227cqw,36.909cqh))] pb-track rounded-full [--c:var(--pb-r-track)] text-[length:min(2.455cqw,9.818cqh)]">
        <div className="pb-fill h-full rounded-full [--c:var(--pb-r-accent)]" style={{ width: "max(1em, 62%)" }} />
      </div>
      <span data-el="Header · Shop" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(16.364cqw,65.455cqh)] h-[min(16.364cqw,65.455cqh)] text-[length:min(16.364cqw,65.455cqh)] left-[calc(100%_-_min(14.545cqw,58.182cqh))] top-[calc(50%_+_min(0cqw,0cqh))] pb-rbub rounded-[26%] [--c:var(--pb-r-accent)]">
        <Icon name="BASKET" glyph="var(--pb-ivory)" hub="var(--pb-r-accent)" className="size-[58%] overflow-visible" />
      </span>
      <span data-el="Header · Coin" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(8.182cqw,32.727cqh)] h-[min(8.182cqw,32.727cqh)] text-[length:min(8.182cqw,32.727cqh)] left-[calc(100%_-_min(30cqw,120cqh))] top-[calc(50%_+_min(0cqw,0cqh))]">
        <Icon name="COIN" glyph="var(--pb-gold)" hub="var(--pb-void)" className="size-full overflow-visible" />
      </span>
      <span data-el="Header · Coins" className="absolute whitespace-pre leading-none left-[calc(100%_-_min(35.909cqw,143.636cqh))] top-[min(9.432cqw,37.727cqh)] -translate-x-full pb-font-title text-[color:var(--pb-r-text)] text-[length:max(11px,min(4.483cqw,17.931cqh))]">{t.coins}</span>
    </>
  );
}
