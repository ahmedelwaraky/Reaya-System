import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bell,
  Check,
  X,
  AlertTriangle,
  Info,
  AlertCircle,
}  from "lucide-react";

const NOTIF_VARIANTS = {
  danger: {
    bg: "#fef2f2",
    border: "#fecaca",
    icon: AlertTriangle,
    color: "#dc2626",
  },
  warning: {
    bg: "#fffbeb",
    border: "#fde68a",
    icon: AlertCircle,
    color: "#d97706",
  },
  info: { bg: "#eff6ff", border: "#bfdbfe", icon: Info, color: "#2563eb" },
  neutral: { bg: "#f9fafb", border: "#e5e7eb", icon: Info, color: "#6b7280" },
};

/**
 * @param {string} title
 * @param {Array}  items — [{ id, titleKey, descKey, timeKey, variant }]
 */
export default function SmartNotifications({
  title,
  items: initialItems = [],
}) {
  const { t } = useTranslation("dashboard");
  const [items, setItems] = useState(initialItems);

  const dismiss = (id) => setItems((prev) => prev.filter((n) => n.id !== id));
  const resolve = (id) =>
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, resolved: true } : n)),
    );

  const active = items.filter((n) => !n.resolved);

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Bell size={16} className="text-[var(--c-accent)]" />
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {title}
        </h3>
        {active.length > 0 && (
          <span
            className="ms-1 bg-red-500 text-white text-[10px] font-bold
                           rounded-full min-w-[18px] h-[18px] flex items-center
                           justify-center px-1"
          >
            {active.length}
          </span>
        )}
      </div>

      {/* Notifications */}
      <div className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pe-1">
        {items.map((n) => {
          const v = NOTIF_VARIANTS[n.variant] ?? NOTIF_VARIANTS.neutral;
          const Icon = v.icon;
          return (
            <div
              key={n.id}
              className="relative flex items-start gap-3 p-3 rounded-xl transition-opacity"
              style={{
                background: n.resolved ? "var(--c-btn-bg)" : v.bg,
                border: `1px solid ${n.resolved ? "var(--c-border)" : v.border}`,
                opacity: n.resolved ? 0.5 : 1,
              }}
            >
              <Icon
                size={15}
                style={{
                  color: n.resolved ? "var(--c-sub)" : v.color,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              />
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: n.resolved ? "var(--c-sub)" : v.color }}
                >
                  {t(n.titleKey)}
                </span>
                <span className="text-[11px] text-[var(--c-sub)]">
                  {t(n.descKey)}
                </span>
                <span className="text-[10px] text-[var(--c-muted,#9ca3af)] mt-0.5">
                  {t(n.timeKey)}
                </span>
              </div>

              {/* Actions */}
              {!n.resolved && (
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => resolve(n.id)}
                    className="w-6 h-6 rounded-lg flex items-center justify-center
                               text-green-600 hover:bg-green-50 transition-colors"
                  >
                    <Check size={13} />
                  </button>
                  <button
                    onClick={() => dismiss(n.id)}
                    className="w-6 h-6 rounded-lg flex items-center justify-center
                               text-[var(--c-sub)] hover:bg-[var(--c-hov-bg)] transition-colors"
                  >
                    <X size={13} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
