// Persona Studio export · Neon City + Soft Paper · 2026-10-26 · re-export overwrites this file
import { useText } from "../../context/PersonaTextContext";
import { Icon } from "../Icon";

/** Header · skin Neon Pill · texts: context/personaText.ts → "header" */
export function Header() {
  const t = useText().header;
  return (
    <>
      <span data-el="Header · Avatar" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(18.792cqw,75.168cqh)] h-[min(18.792cqw,75.168cqh)] text-[length:min(18.792cqw,75.168cqh)] left-[min(16.107cqw,64.43cqh)] top-[calc(50%_+_min(0cqw,0cqh))] pb-bub rounded-full [--c:var(--pb-r-accent)]">
        <Icon name="USER" glyph="var(--pb-ivory)" hub="var(--pb-r-accent)" className="size-[58%] overflow-visible" />
      </span>
      <span data-el="Header · Name" className="absolute whitespace-pre leading-none left-[min(30.019cqw,120.076cqh)] top-[min(6.249cqw,24.995cqh)] pb-font-title text-[color:var(--pb-r-title)] text-[length:max(11px,min(3.986cqw,15.946cqh))]">{t.name}</span>
      <span data-el="Header · Level" className="absolute whitespace-pre leading-none left-[min(45.647cqw,182.589cqh)] top-[min(6.828cqw,27.31cqh)] pb-font-title text-[color:var(--pb-r-accent)] text-[length:max(11px,min(3.189cqw,12.756cqh))]">{t.level}</span>
      <div data-el="Header · XP Bar" className="absolute -translate-x-1/2 -translate-y-1/2 w-[min(67.114cqw,268.456cqh)] h-[min(2.463cqw,9.852cqh)] left-[min(63.576cqw,254.304cqh)] top-[calc(100%_-_min(9.216cqw,36.864cqh))] pb-track rounded-full [--c:var(--pb-r-track)] text-[length:min(2.463cqw,9.852cqh)]">
        <div className="pb-fill h-full rounded-full [--c:var(--pb-r-accent)]" style={{ width: "max(1em, 62%)" }} />
      </div>
      <span data-el="Header · Shop" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(16.107cqw,64.43cqh)] h-[min(16.107cqw,64.43cqh)] text-[length:min(16.107cqw,64.43cqh)] left-[calc(100%_-_min(14.765cqw,59.06cqh))] top-[calc(50%_+_min(0cqw,0cqh))] pb-rbub rounded-[26%] [--c:var(--pb-r-accent)]">
        <Icon name="BASKET" glyph="var(--pb-ivory)" hub="var(--pb-r-accent)" className="size-[58%] overflow-visible" />
      </span>
      <span data-el="Header · Coin" className="absolute grid place-items-center -translate-x-1/2 -translate-y-1/2 w-[min(8.054cqw,32.215cqh)] h-[min(8.054cqw,32.215cqh)] text-[length:min(8.054cqw,32.215cqh)] left-[calc(100%_-_min(29.978cqw,119.911cqh))] top-[calc(50%_+_min(0cqw,0cqh))]">
        <Icon name="COIN" glyph="var(--pb-gold)" hub="var(--pb-void)" className="size-full overflow-visible" />
      </span>
      <span data-el="Header · Coins" className="absolute whitespace-pre leading-none left-[calc(100%_-_min(35.794cqw,143.177cqh))] top-[min(9.606cqw,38.423cqh)] -translate-x-full pb-font-title text-[color:var(--pb-r-text)] text-[length:max(11px,min(3.588cqw,14.351cqh))]">{t.coins}</span>
    </>
  );
}
