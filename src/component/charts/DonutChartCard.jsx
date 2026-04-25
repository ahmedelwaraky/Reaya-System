import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const DEFAULT_COLORS = ["#1f7ead", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function DonutChartCard({
  title,
  data = [],
  colors = DEFAULT_COLORS,
  legendPosition = "bottom",
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const isSide = legendPosition === "side";

  const Legend = (
    <div className="flex flex-col justify-center gap-2 flex-shrink-0">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-2 whitespace-nowrap">
          {isRtl ? (
            // ✅ RTL: نقطة يمين + نص يسار
            <>
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: colors[i % colors.length] }}
              />
              <span className="text-[12px] text-[var(--c-sub)]">
                {item.name}
              </span>
            </>
          ) : (
            // ✅ LTR: نقطة يسار + نص يمين
            <>
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: colors[i % colors.length] }}
              />
              <span className="text-[12px] text-[var(--c-sub)]">
                {item.name}
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const Chart = (
    <div style={{ width: 180, height: 180, flexShrink: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-[14px]
                    bg-[var(--c-bg)] border border-[var(--c-border)]"
    >
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
          // ✅ RTL: Legend يسار + Chart يمين
          <div
            className="flex items-center justify-center"
            style={{ flexDirection: "row", gap: 0 }}
          >
            {Chart}
            {Legend}
          </div>
        ) : (
          // ✅ LTR: Chart يسار + Legend يمين
          <div
            className="flex items-center justify-center"
            style={{ flexDirection: "row", gap: 0 }}
          >
            {Chart}
            {Legend}
          </div>
        )
      ) : (
        <div className="flex flex-col gap-3">
          <ResponsiveContainer width="100%" height={200}>
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
            </PieChart>
          </ResponsiveContainer>

          {isRtl ? (
            // ✅ RTL: نقطة يمين + نص يسار
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5"
                  style={{ flexDirection: "row-reverse" }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: colors[i % colors.length] }}
                  />
                  <span className="text-[12px] text-[var(--c-sub)]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            // ✅ LTR: نقطة يسار + نص يمين
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5"
                  style={{ flexDirection: "row" }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: colors[i % colors.length] }}
                  />
                  <span className="text-[12px] text-[var(--c-sub)]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
