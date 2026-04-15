import { useTranslation } from "react-i18next";
import { AlertTriangle, Lightbulb, TrendingUp, Users, Brain }  from "lucide-react";

const INSIGHT_VARIANTS = {
  danger:  { icon: AlertTriangle, bg: "#fef2f2", border: "#fecaca", dot: "#ef4444", text: "#dc2626" },
  warning: { icon: Lightbulb,     bg: "#fffbeb", border: "#fde68a", dot: "#f59e0b", text: "#d97706" },
  info:    { icon: TrendingUp,    bg: "#eff6ff", border: "#bfdbfe", dot: "#3b82f6", text: "#2563eb" },
  neutral: { icon: Users,         bg: "#faf5ff", border: "#e9d5ff", dot: "#8b5cf6", text: "#7c3aed" },
};

/**
 * @param {string} title
 * @param {Array}  items  — [{ id, titleKey, descKey, variant }]
 */
export default function AIInsightsPanel({ title, items = [] }) {
  const { t } = useTranslation("dashboard");

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center gap-2">
        <Brain size={16} className="text-[var(--c-accent)]" />
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">{title}</h3>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const v   = INSIGHT_VARIANTS[item.variant] ?? INSIGHT_VARIANTS.info;
          const Icon = v.icon;
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-xl"
              style={{ background: v.bg, border: `1px solid ${v.border}` }}
            >
              <Icon size={15} style={{ color: v.text, flexShrink: 0, marginTop: 1 }} />
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[13px] font-semibold" style={{ color: v.text }}>
                  {t(item.titleKey)}
                </span>
                <span className="text-[12px] text-[var(--c-sub)]">
                  {t(item.descKey)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}