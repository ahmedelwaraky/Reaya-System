import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/**
 * @param {string}   title   — عنوان الكارد
 * @param {Array}    data    — [{ name, value, value2?, ... }]
 * @param {Array}    lines   — [{ key, color, label }]
 *
 * @example
 * <LineChartCard
 *   title="الاستخدام الشهري"
 *   data={[{ name: "يناير", value: 130, value2: 90 }]}
 *   lines={[
 *     { key: "value",  color: "#1f7ead", label: "الخدمات المقدمة" },
 *     { key: "value2", color: "#f59e0b", label: "الخدمات المجدولة" },
 *   ]}
 * />
 */
export default function LineChartCard({ title, data = [], lines = [] }) {
  /* ── Default: single line if no lines prop passed ── */
  const resolvedLines =
    lines.length > 0
      ? lines
      : [{ key: "value", color: "var(--c-accent)", label: "" }];

  return (
    <div
      className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)]
                 p-5 flex flex-col gap-4"
    >
      {/* Title */}
      {title && (
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {title}
        </h3>
      )}

      {/* Chart */}
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--c-border)"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "var(--c-muted, #9ca3af)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "var(--c-muted, #9ca3af)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid var(--c-border)",
                background: "var(--c-bg)",
                color: "var(--c-text)",
                fontSize: "12px",
              }}
              cursor={{ stroke: "var(--c-border)", strokeWidth: 1 }}
            />
            {resolvedLines.length > 1 && (
              <Legend
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
                formatter={(value) => (
                  <span style={{ color: "var(--c-text)" }}>{value}</span>
                )}
              />
            )}
            {resolvedLines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                name={line.label ?? line.key}
                stroke={line.color ?? "var(--c-accent)"}
                strokeWidth={2.5}
                dot={{ r: 4, fill: line.color ?? "var(--c-accent)", strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}