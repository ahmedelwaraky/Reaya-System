import { useTranslation } from "react-i18next";
import StatusBadge from "./StatusBadge";

// ── Single Row ──────────────────────────────────────────
function InfoRow({ label, value, isStatus = false, isLast = false }) {
  return (
    <div
      className="flex items-center justify-between py-3 gap-4"
      style={!isLast ? { borderBottom: "1px solid var(--c-border)" } : {}}
    >
      <span className="text-sm" style={{ color: "var(--c-sub)" }}>
        {label}
      </span>

      {isStatus ? (
        <StatusBadge status={value} />
      ) : (
        <span className="text-sm font-semibold" style={{ color: "var(--c-text)" }}>
          {value ?? "—"}
        </span>
      )}
    </div>
  );
}

// ── InfoCard ────────────────────────────────────────────
/**
 * @param {ReactNode} icon     — Lucide icon component
 * @param {string}    title    — card header title
 * @param {Array}     fields   — [{ label, value, isStatus? }]
 */
export default function InfoCard({ icon: Icon, title, fields = [] }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="rounded-2xl px-4 pt-3 pb-1"
      style={{
        background: "var(--c-bg)",
        border: "1px solid var(--c-border)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-end gap-2 pb-3"
        style={{ borderBottom: "1px solid var(--c-border)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--c-accent)" }}>
          {title}
        </span>
        {Icon && <Icon size={16} style={{ color: "var(--c-accent)" }} />}
      </div>

      {/* Rows */}
      {fields.map((field, i) => (
        <InfoRow
          key={i}
          label={field.label}
          value={field.value}
          isStatus={field.isStatus}
          isLast={i === fields.length - 1}
        />
      ))}
    </div>
  );
}