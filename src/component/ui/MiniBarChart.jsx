import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

const TICK_STYLE    = { fontSize: 10, fill: "var(--c-muted,#9ca3af)" };
const GRID_PROPS    = { strokeDasharray: "3 3", stroke: "var(--c-border)", vertical: false };
const TOOLTIP_STYLE = {
  borderRadius: "10px",
  border:       "1px solid var(--c-border)",
  background:   "var(--c-bg)",
  color:        "var(--c-text)",
  fontSize:     "12px",
};

/**
 * @param {Array}   data
 * @param {string}  color    — bar color  (default: accent blue)
 * @param {string}  dataKey  — data key   (default: "value")
 */
export default function MiniBarChart({
  data,
  color   = "#1f7ead",
  dataKey = "value",
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid {...GRID_PROPS} />
        <XAxis dataKey="name" tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <YAxis tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          cursor={{ fill: "var(--c-hov-bg,rgba(0,0,0,.04))" }}
        />
        <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} maxBarSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}