import { useTranslation } from "react-i18next";
import { TrendingUp } from "lucide-react";
function getColor(value) {
  if (value >= 90) return "#ef4444";
  if (value >= 75) return "#f59e0b";
  return "#1f7ead";
}

/**
 * @param {string} title
 * @param {Array}  data  — [{ name, current, predicted }]
 */
export default function DeptLoadChart({ title, data = [] }) {
  const { t } = useTranslation("dashboard");

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center gap-2">
        <TrendingUp size={16} className="text-[var(--c-accent)]" />
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">{title}</h3>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-4">
        {data.map((dept, i) => (
          <div key={i} className="flex flex-col gap-1.5">

            {/* Label + values */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-[var(--c-text)]">{dept.name}</span>
              <span className="text-[11px] text-[var(--c-sub)]">
                {dept.current}% → {dept.predicted}%
              </span>
            </div>

            {/* Current bar */}
            <div className="relative h-3 rounded-full bg-[var(--c-btn-bg)] overflow-hidden">
              <div
                className="absolute inset-y-0 start-0 rounded-full transition-all duration-500"
                style={{ width: `${dept.current}%`, background: getColor(dept.current) }}
              />
            </div>

            {/* Predicted bar (lighter) */}
            <div className="relative h-2 rounded-full bg-[var(--c-btn-bg)] overflow-hidden">
              <div
                className="absolute inset-y-0 start-0 rounded-full transition-all duration-500 opacity-40"
                style={{ width: `${dept.predicted}%`, background: getColor(dept.predicted) }}
              />
            </div>

          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 pt-1 border-t border-[var(--c-border)]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded-sm bg-[#1f7ead]" />
          <span className="text-[11px] text-[var(--c-sub)]">{t("deptLoad.current")}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded-sm bg-[#1f7ead] opacity-40" />
          <span className="text-[11px] text-[var(--c-sub)]">{t("deptLoad.predicted")}</span>
        </div>
      </div>

    </div>
  );
}