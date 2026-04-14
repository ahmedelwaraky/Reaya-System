import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DEFAULT_COLORS = ["#1f7ead", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6"];

/**
 * @param {string}  title   — عنوان الكارد (مترجم من الخارج)
 * @param {Array}   data    — [{ name, value }]
 * @param {Array}   colors  — مصفوفة ألوان (اختياري)
 */
export default function DonutChartCard({ title, data = [], colors = DEFAULT_COLORS }) {
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
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--c-bg)",
              border: "1px solid var(--c-border)",
              borderRadius: 8,
              fontSize: 13,
              color: "var(--c-text)",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span style={{ fontSize: 12, color: "var(--c-sub)" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}