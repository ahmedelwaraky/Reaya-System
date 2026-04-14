import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

/**
 * @param {string}   title   — عنوان الكارد (مترجم من الخارج)
 * @param {Array}    data    — [{ name, value }]
 * @param {string}   color   — لون الأعمدة (اختياري)
 */
export default function BarChartCard({ title, data = [], color = "#1f7ead" }) {
  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-[14px]
                 bg-[var(--c-bg)] border border-[var(--c-border)]"
    >
      {title && (
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {title}
        </h3>
      )}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={28}>
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
              background: "var(--c-bg)",
              border: "1px solid var(--c-border)",
              borderRadius: 8,
              fontSize: 13,
              color: "var(--c-text)",
            }}
            cursor={{ fill: "var(--c-border)", radius: 4 }}
          />
          <Bar dataKey="value" fill={color} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}