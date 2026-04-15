import { useTranslation } from "react-i18next";
import { ListOrdered, Clock } from "lucide-react";

const PRIORITY_COLORS = {
  critical: { dot: "#ef4444", bg: "#fef2f2", border: "#fecaca", label: "حرج"   },
  urgent:   { dot: "#f59e0b", bg: "#fffbeb", border: "#fde68a", label: "عاجل"  },
  normal:   { dot: "#1f7ead", bg: "transparent", border: "transparent", label: "عادي"  },
  low:      { dot: "#9ca3af", bg: "transparent", border: "transparent", label: "منخفض" },
};

/**
 * @param {Array} queue  — [{ id, rank, name, code, dept, type, wait, priority, priorityLabel }]
 * @param {number} avgWait
 * @param {number} inTransit
 */
export default function SmartQueue({ queue = [], avgWait = 15, inTransit = 7 }) {
  const { t } = useTranslation("dashboard");

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <ListOrdered size={16} className="text-[var(--c-accent)]" />
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
            {t("queue.title")}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-[var(--c-sub)]">
            <Clock size={11} />
            {t("queue.avgWait")} ~{avgWait} {t("queue.mins")}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold border border-blue-200">
            {t("queue.inTransit")} {inTransit}
          </span>
        </div>
      </div>

      {/* Queue list */}
      <div className="flex flex-col gap-2">
        {queue.map((patient) => {
          const p = PRIORITY_COLORS[patient.priority] ?? PRIORITY_COLORS.normal;
          const isHighlighted = ["critical", "urgent"].includes(patient.priority);
          return (
            <div
              key={patient.id}
              className="flex items-center gap-3 p-3 rounded-xl transition-colors"
              style={{
                background: isHighlighted ? p.bg : "transparent",
                border: isHighlighted ? `1px solid ${p.border}` : "1px solid transparent",
              }}
            >
              {/* Rank */}
              <span className="text-[13px] font-bold text-[var(--c-sub)] w-5 text-center flex-shrink-0">
                {patient.rank}
              </span>

              {/* Priority dot */}
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: p.dot }}
              />

              {/* Name + code */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-[var(--c-text)] truncate">
                    {patient.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--c-btn-bg)]
                                   text-[var(--c-sub)] font-mono flex-shrink-0">
                    {patient.code}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--c-sub)] truncate">
                  {patient.dept} • {patient.type}
                </span>
              </div>

              {/* Wait + priority */}
              <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                <div className="flex items-center gap-1 text-[11px] text-[var(--c-sub)]">
                  <Clock size={11} />
                  {t("queue.waitLabel")} {patient.wait}
                </div>
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: p.dot }}
                >
                  {patient.priorityLabel ?? p.label}
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}