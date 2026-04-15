import { useTranslation } from "react-i18next";
import { Layers, Hotel, Users, CheckSquare, AlertTriangle, Plus } from "lucide-react";
import { FLOORS_DATA } from "../api/floors.api";

/* ── Occupancy bar color ─────────────────── */
function getBarColor(pct) {
  if (pct >= 85) return "#ef4444";
  if (pct >= 70) return "#1f7ead";
  return "#10b981";
}

/* ── Mini stat chip ──────────────────────── */
function Chip({ value, label, color, bg, border }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-2.5 rounded-xl flex-1"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <span className="text-[18px] font-bold" style={{ color }}>{value}</span>
      <span className="text-[11px] mt-0.5" style={{ color }}>{label}</span>
    </div>
  );
}

/* ── Floor Card ──────────────────────────── */
function FloorCard({ floor, t }) {
  const barColor = getBarColor(floor.occupancy);

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-4 flex flex-col gap-3">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] font-bold text-[var(--c-text)]">
            {t(`floorNames.${floor.nameKey}`)}
          </h3>
          <span className="text-[11px] px-2 py-0.5 rounded-full
                           bg-[var(--c-btn-bg)] border border-[var(--c-border)]
                           text-[var(--c-sub)]">
            {floor.building}
          </span>
        </div>
      </div>

      {/* Occupancy bar */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between text-[11px] text-[var(--c-sub)]">
          <span>{t("occupancy")}</span>
          <span style={{ color: barColor }} className="font-semibold">{floor.occupancy}%</span>
        </div>
        <div className="h-2 rounded-full bg-[var(--c-btn-bg)] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${floor.occupancy}%`, background: barColor }}
          />
        </div>
      </div>

      {/* Chips */}
      <div className="flex gap-2">
        <Chip
          value={floor.maintenance}
          label={t("maintenance")}
          color="#dc2626"
          bg="#fef2f2"
          border="#fecaca"
        />
        <Chip
          value={floor.occupied}
          label={t("occupied")}
          color="#d97706"
          bg="#fffbeb"
          border="#fde68a"
        />
        <Chip
          value={floor.available}
          label={t("available")}
          color="#16a34a"
          bg="#f0fdf4"
          border="#bbf7d0"
        />
      </div>

      {/* Dept tags */}
      <div className="flex flex-wrap gap-1.5">
        {floor.depts.map((dept, i) => (
          <span
            key={i}
            className="text-[11px] px-2 py-0.5 rounded-full
                       bg-[var(--c-btn-bg)] border border-[var(--c-border)]
                       text-[var(--c-sub)]"
          >
            {dept}
          </span>
        ))}
      </div>

    </div>
  );
}

/* ── Mini stat ───────────────────────────── */
function StatCard({ value, label, icon: Icon, iconColor }) {
  return (
    <div className="flex-1 flex items-center justify-between px-5 py-4
                    rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)]">
      <div className="flex flex-col gap-0.5">
        <span className="text-[24px] font-bold text-[var(--c-text)]">{value}</span>
        <span className="text-[12px] text-[var(--c-sub)]">{label}</span>
      </div>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${iconColor}18` }}
      >
        <Icon size={20} style={{ color: iconColor }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   FLOORS PAGE
════════════════════════════════════════════ */
export default function Floors() {
  const { t } = useTranslation("floors");

  const totalRooms   = FLOORS_DATA.reduce((a, f) => a + f.maintenance + f.occupied + f.available, 0);
  const totalOccupied    = FLOORS_DATA.reduce((a, f) => a + f.occupied,    0);
  const totalAvailable   = FLOORS_DATA.reduce((a, f) => a + f.available,   0);
  const totalMaintenance = FLOORS_DATA.reduce((a, f) => a + f.maintenance, 0);

  return (
    <div className="flex flex-col gap-6">

      {/* ── Header ───────────────────────────── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={20} className="text-[var(--c-accent)]" />
          <h1 className="text-[20px] font-bold text-[var(--c-text)]">{t("pageTitle")}</h1>
        </div>
        <button
          className="flex items-center gap-2 h-9 px-4 rounded-[10px] text-[13px]
                     font-semibold bg-[var(--c-accent)] text-white hover:opacity-90
                     transition-opacity"
        >
          <Plus size={15} />
          {t("addFloor")}
        </button>
      </div>

      {/* ── Stats ────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard value={totalRooms}       label={t("stats.totalRooms")}   icon={Hotel}          iconColor="#1f7ead" />
        <StatCard value={totalOccupied}    label={t("stats.occupied")}     icon={Users}          iconColor="#d97706" />
        <StatCard value={totalAvailable}   label={t("stats.available")}    icon={CheckSquare}    iconColor="#16a34a" />
        <StatCard value={totalMaintenance} label={t("stats.maintenance")}  icon={AlertTriangle}  iconColor="#dc2626" />
      </div>

      {/* ── Floor Cards Grid ─────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {FLOORS_DATA.map((floor) => (
          <FloorCard key={floor.id} floor={floor} t={t} />
        ))}
      </div>

    </div>
  );
}