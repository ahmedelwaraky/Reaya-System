import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

/**
 * @param {string} title
 * @param {Array}  data  — [{ name, key1, key2, ... }]
 * @param {Array}  bars  — [{ key, color, label }]
 */
export default function StackedBarChartCard({ title, data = [], bars = [] }) {
  return (
    <div className="flex flex-col gap-4 p-5 rounded-[14px]
                    bg-[var(--c-bg)] border border-[var(--c-border)]">
      {title && (
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {title}
        </h3>
      )}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={32}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--c-border)"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "var(--c-sub)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--c-sub)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background:   "var(--c-bg)",
              border:       "1px solid var(--c-border)",
              borderRadius: 8,
              fontSize:     13,
              color:        "var(--c-text)",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span style={{ fontSize: 12, color: "var(--c-sub)" }}>{value}</span>
            )}
          />
          {bars.map((b, i) => (
            <Bar
              key={b.key}
              dataKey={b.key}
              name={b.label}
              stackId="a"
              fill={b.color}
              radius={i === bars.length - 1 ? [6, 6, 0, 0] : [0, 0, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}