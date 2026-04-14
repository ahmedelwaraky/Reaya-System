import { useTranslation } from "react-i18next";
import { CheckCircle2, Clock, XCircle, AlertTriangle, Info, Sparkles, Ban } from "lucide-react";

const VARIANTS = {
  success: {
    dot:    "#10b981",
    text:   "#059669",
    bg:     "#f0fdf4",
    border: "#bbf7d0",
  },
  leave: {
    dot:    "#a855f7",
    text:   "#9333ea",
    bg:     "#faf5ff",
    border: "#e9d5ff",
  },
  warning: {
    dot:    "#f59e0b",
    text:   "#d97706",
    bg:     "#fffbeb",
    border: "#fde68a",
  },
  danger: {
    dot:    "#ef4444",
    text:   "#dc2626",
    bg:     "#fef2f2",
    border: "#fecaca",
  },
  info: {
    dot:    "#3b82f6",
    text:   "#2563eb",
    bg:     "#eff6ff",
    border: "#bfdbfe",
  },
  primary: {
    dot:    "#1f7ead",
    text:   "#1f7ead",
    bg:     "#f0f9ff",
    border: "#bae6fd",
  },
  neutral: {
    dot:    "#9ca3af",
    text:   "#6b7280",
    bg:     "#f9fafb",
    border: "#e5e7eb",
  },
};

const STATUS_MAP = {
  active:      "success",
  leave:       "leave",
  inactive:    "danger",
  banned:      "danger",
  pending:     "warning",
  review:      "info",
  new:         "primary",
  maintenance: "warning",  // ✅
};

/**
 * @param {string}  status     — "active" | "leave" | "pending" | "maintenance" ...
 * @param {string}  variant    — override (اختياري)
 * @param {string}  label      — نص مخصص (اختياري)
 * @param {string}  namespace  — i18n namespace (default: "translation")
 */
export default function StatusBadge({
  status,
  variant,
  label,
  namespace = "translation",
}) {
  const { t } = useTranslation(namespace);

  const resolvedVariant = variant ?? STATUS_MAP[status] ?? "neutral";
  const v    = VARIANTS[resolvedVariant] ?? VARIANTS.neutral;

  // ✅ Fix: statuses.{status} بدل status.{status}
  const text = label ?? (status ? t(`statuses.${status}`, { defaultValue: status }) : "");

  return (
    <span
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        gap:            "5px",
        width:          "90px",
        padding:        "3px 0",
        borderRadius:   "999px",
        fontSize:       "12px",
        fontWeight:     "500",
        whiteSpace:     "nowrap",
        userSelect:     "none",
        lineHeight:     "1.6",
        background:     v.bg,
        color:          v.text,
        border:         `1px solid ${v.border}`,
      }}
    >
      <span
        style={{
          width:        "6px",
          height:       "6px",
          borderRadius: "50%",
          background:   v.dot,
          flexShrink:   0,
        }}
      />
      {text}
    </span>
  );
}