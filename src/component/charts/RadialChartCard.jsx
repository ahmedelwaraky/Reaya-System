import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

/**
 * Rainbow/Semicircle chart
 * @param {string} title
 * @param {Array}  data    — [{ name, value }]
 * @param {Array}  colors
 * @param {string} legendPosition — "bottom" | "side"
 */
export default function RadialChartCard({
  title,
  data           = [],
  colors         = ["#1f7ead","#10b981","#f59e0b","#ef4444","#8b5cf6"],
  legendPosition = "side",
}) {
  const { i18n } = useTranslation();
  const isRtl    = i18n.language === "ar";
  const isSide   = legendPosition === "side";

  const Legend = (
    <div className="flex flex-col justify-center gap-2 flex-shrink-0">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-2 whitespace-nowrap">
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: colors[i % colors.length] }}
          />
          <span className="text-[12px] text-[var(--c-sub)]">{item.name}</span>
        </div>
      ))}
    </div>
  );

  /* ── Rainbow = concentric half-rings ─────── */
  const total    = data.length;
const gap      = 10;   // ✅ مسافة بين الـ rings
const minInner = 35;   // ✅ أصغر ring من جوه
const ringW    = 16;   // ✅ سماكة الـ ring

 const Chart = (
  <div style={{ width: 320, height: 200, flexShrink: 0 }}>  {/* ✅ أكبر */}
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        {data.map((item, i) => {
          const inner = minInner + i * (ringW + gap);
          const outer = inner + ringW;
          const pct   = item.value / Math.max(...data.map((d) => d.value));
          const angle = pct * 180;
          return (
            <Pie
              key={i}
              data={[
                { value: angle },
                { value: 180 - angle },
              ]}
              cx="50%"
              cy="95%"        // ✅ نزلنا المركز أكتر عشان مايتقطعش
              startAngle={180}
              endAngle={0}
              innerRadius={inner}
              outerRadius={outer}
              dataKey="value"
              paddingAngle={0}
              strokeWidth={0}
            >
              <Cell fill={colors[i % colors.length]} />
              <Cell fill="var(--c-border)" />
            </Pie>
          );
        })}
      </PieChart>
    </ResponsiveContainer>
  </div>
);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-[14px]
                    bg-[var(--c-bg)] border border-[var(--c-border)]">
      {title && (
        <h3
          className="text-[14px] font-semibold text-[var(--c-text)]"
          style={{ textAlign: isRtl ? "right" : "left" }}
        >
          {title}
        </h3>
      )}

      {isSide ? (
        isRtl ? (
          <div className="flex items-center justify-center" style={{ flexDirection: "row", gap: 0 }}>
            {Legend}
            {Chart}
          </div>
        ) : (
          <div className="flex items-center justify-center" style={{ flexDirection: "row", gap: 0 }}>
            {Chart}
            {Legend}
          </div>
        )
      ) : (
        <div className="flex flex-col items-center gap-3">
          {Chart}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            {data.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: colors[i % colors.length] }}
                />
                <span className="text-[12px] text-[var(--c-sub)]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}