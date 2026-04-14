import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

/**
 * @param {string} title
 * @param {Array}  data     — [{ name, value1, value2? }]
 * @param {Array}  areas    — [{ key, color, label }]
 */
export default function AreaChartCard({ title, data = [], areas = [] }) {
  return (
    <div className="flex flex-col gap-4 p-5 rounded-[14px]
                    bg-[var(--c-bg)] border border-[var(--c-border)]">
      {title && (
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {title}
        </h3>
      )}
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            {areas.map((a) => (
              <linearGradient key={a.key} id={`grad-${a.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={a.color} stopOpacity={0.25} />
                <stop offset="95%" stopColor={a.color} stopOpacity={0}    />
              </linearGradient>
            ))}
          </defs>

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
          {areas.map((a) => (
            <Area
              key={a.key}
              type="monotone"
              dataKey={a.key}
              name={a.label}
              stroke={a.color}
              strokeWidth={2}
              fill={`url(#grad-${a.key})`}
              dot={false}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}