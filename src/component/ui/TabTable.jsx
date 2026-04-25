import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, Calendar, Users } from "lucide-react";
import StatusBadge from "./StatusBadge";

// ── Tab Button ──────────────────────────────────────────
function Tab({ label, icon: Icon, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-colors"
      style={{
        color: active ? "var(--c-accent)" : "var(--c-sub)",
        borderBottom: active ? "2px solid var(--c-accent)" : "2px solid transparent",
        background: "transparent",
      }}
    >
      <Icon size={14} />
      {label}
      <span
        className="text-xs px-1.5 py-0.5 rounded-full"
        style={{
          background: active ? "var(--c-active-item)" : "var(--c-btn-bg)",
          color: active ? "var(--c-active-tx)" : "var(--c-sub)",
        }}
      >
        {count}
      </span>
    </button>
  );
}

// ── Table ───────────────────────────────────────────────
function DataTable({ columns, rows, onView }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  if (!rows.length) return (
    <div className="py-10 text-center text-sm" style={{ color: "var(--c-sub)" }}>
      لا توجد بيانات
    </div>
  );

  return (
    <table className="w-full" dir={isRtl ? "rtl" : "ltr"}>
      {/* Head */}
      <thead>
        <tr style={{ borderBottom: "1px solid var(--c-border)" }}>
          {columns.map((col) => (
            <th
              key={col.key}
              className="px-4 py-3 text-xs font-medium text-start"
              style={{ color: "var(--c-sub)" }}
            >
              {col.label}
            </th>
          ))}
          <th className="w-10" />
        </tr>
      </thead>

      {/* Body */}
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={row.id}
            className="transition-colors"
            style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--c-border)" : "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--c-hov-bg)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {columns.map((col) => (
              <td
                key={col.key}
                className="px-4 py-3 text-sm"
                style={{ color: "var(--c-text)" }}
              >
                {col.isStatus
                  ? <StatusBadge status={row[col.key]} />
                  : row[col.key] ?? "—"}
              </td>
            ))}
            {/* View Button */}
            <td className="px-4 py-3 text-center">
              <button
                onClick={() => onView?.(row)}
                className="transition-colors"
                style={{ color: "var(--c-sub)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-sub)")}
              >
                <Eye size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ── Main Component ──────────────────────────────────────
/**
 * @param {Array} tabs — [{
 *   id, label, icon,
 *   columns: [{ key, label, isStatus? }],
 *   rows:    [{ id, ...data }]
 * }]
 * @param {Function} onView — (row) => void
 */
export default function TabbedTable({ tabs = [], onView }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === activeTab);

return (
  <div className="flex flex-col gap-3">

    {/* ── Tabs Card ── */}
    <div
      className="rounded-2xl px-2"
      style={{
        background: "var(--c-bg)",
        border: "1px solid var(--c-border)",
      }}
    >
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            icon={tab.icon}
            count={tab.rows.length}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
    </div>

    {/* ── Table Card ── */}
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--c-bg)",
        border: "1px solid var(--c-border)",
      }}
    >
      <DataTable
        columns={current?.columns ?? []}
        rows={current?.rows ?? []}
        onView={onView}
      />
    </div>

  </div>
);
}