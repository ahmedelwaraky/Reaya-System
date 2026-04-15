import {
  LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const TICK_STYLE   = { fontSize: 10, fill: "var(--c-muted,#9ca3af)" };
const GRID_PROPS   = { strokeDasharray: "3 3", stroke: "var(--c-border)", vertical: false };
const TOOLTIP_STYLE = {
  borderRadius: "10px",
  border:       "1px solid var(--c-border)",
  background:   "var(--c-bg)",
  color:        "var(--c-text)",
  fontSize:     "12px",
};

/**
 * @param {Array}   data
 * @param {string}  color      — line 1 color   (default: accent blue)
 * @param {string}  dataKey    — line 1 data key (default: "value")
 * @param {string}  dataKey2   — line 2 data key (optional)
 * @param {string}  color2     — line 2 color    (default: amber)
 * @param {string}  label      — legend label for line 1
 * @param {string}  label2     — legend label for line 2
 */
export default function MiniLineChart({
  data,
  color    = "#1f7ead",
  dataKey  = "value",
  dataKey2,
  color2   = "#f59e0b",
  label,
  label2,
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid {...GRID_PROPS} />
        <XAxis dataKey="name" tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <YAxis tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={TOOLTIP_STYLE}
          cursor={{ stroke: "var(--c-border)", strokeWidth: 1 }}
        />
        {dataKey2 && (
          <Legend
            wrapperStyle={{ fontSize: "11px" }}
            formatter={(v) => <span style={{ color: "var(--c-text)" }}>{v}</span>}
          />
        )}
        <Line
          type="monotone"
          dataKey={dataKey}
          name={label ?? dataKey}
          stroke={color}
          strokeWidth={2.5}
          dot={{ r: 3, fill: color, strokeWidth: 0 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
        />
        {dataKey2 && (
          <Line
            type="monotone"
            dataKey={dataKey2}
            name={label2 ?? dataKey2}
            stroke={color2}
            strokeWidth={2.5}
            dot={{ r: 3, fill: color2, strokeWidth: 0 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}