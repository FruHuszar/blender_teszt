// Persona Studio export · GirliePop + Soft Paper · 2026-10-26 · re-export overwrites this file
import type { RadarAxis } from "../context/personaText";

type Props = {
  items: RadarAxis[];
  /** design size of the chart box, web radius, label font size and label distance (px; the svg scales) */
  size: number;
  radius: number;
  font: number;
  gap: number;
  accent: string;
  track: string;
  label: string;
  className?: string;
  dataEl?: string;
};

export function RadarChart({ items, size, radius, font, gap, accent, track, label, className, dataEl }: Props) {
  const n = Math.max(3, items.length);
  const angles = Array.from({ length: n }, (_, i) => -Math.PI / 2 + (2 * Math.PI * i) / n);
  const points = (values: number[]) =>
    angles.map((a, i) => `${(radius * (values[i] ?? 0.5) * Math.cos(a)).toFixed(2)},${(radius * (values[i] ?? 0.5) * Math.sin(a)).toFixed(2)}`).join(" ");
  return (
    <svg data-el={dataEl} viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`} className={className} aria-hidden="true">
      {[1, 0.66, 0.33].map((k) => (
        <polygon key={k} points={points(angles.map(() => k))} style={{ fill: "none", stroke: track, strokeOpacity: 0.8, strokeWidth: 1 }} />
      ))}
      {angles.map((a, i) => (
        <line key={i} x1={0} y1={0} x2={radius * Math.cos(a)} y2={radius * Math.sin(a)} style={{ stroke: track, strokeOpacity: 0.5, strokeWidth: 0.8 }} />
      ))}
      <polygon points={points(items.map((it) => it.value))} style={{ fill: accent, fillOpacity: 0.35, stroke: accent, strokeWidth: 1.6 }} />
      {items.map((it, i) => {
        const a = angles[i];
        const anchor = Math.abs(Math.cos(a)) < 0.3 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
        return (
          <text
            key={i}
            x={(radius + gap) * Math.cos(a)}
            y={(radius + gap) * Math.sin(a)}
            fontSize={font}
            textAnchor={anchor}
            dominantBaseline="central"
            style={{ fill: label, fillOpacity: 0.8 }}
          >
            {it.label}
          </text>
        );
      })}
    </svg>
  );
}
