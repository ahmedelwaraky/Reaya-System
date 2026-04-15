import { useState }       from "react";
import { useTranslation } from "react-i18next";

import StatusBadge from "../../../component/ui/StatusBadge";
import { BedDouble, Hotel, CheckSquare, Wrench, AlertTriangle, Search }from "lucide-react";

import { ASSIGNMENTS_DATA, ROOM_MAP } from "../api/roomAssignments.api";

/* ── Room status styles ──────────────────── */
const ROOM_STYLES = {
  occupied:    { bg: "#fef9ec", border: "#fde68a", text: "#d97706" },
  available:   { bg: "#f0fdf4", border: "#86efac", text: "#16a34a" },
  critical:    { bg: "#fef2f2", border: "#fca5a5", text: "#dc2626" },
  maintenance: { bg: "#f9fafb", border: "#d1d5db", text: "#9ca3af" },
};

/* ── Mini stat ───────────────────────────── */
function MiniStat({ value, label, color }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-5 px-2
                    rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)]">
      <span className="text-[26px] font-bold" style={{ color }}>{value}</span>
      <span className="text-[12px] text-[var(--c-sub)] mt-1">{label}</span>
    </div>
  );
}

/* ── Room card in map ────────────────────── */
function RoomCard({ room, t }) {
  const s = ROOM_STYLES[room.status] ?? ROOM_STYLES.available;
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-3 rounded-xl
                 cursor-pointer transition-all hover:scale-[1.03] select-none min-w-[90px]"
      style={{ background: s.bg, border: `1.5px solid ${s.border}` }}
    >
      <span className="text-[15px] font-bold" style={{ color: s.text }}>{room.name}</span>
      <span className="text-[10px] mt-0.5" style={{ color: s.text }}>
        {t(`types.${room.typeKey}`)}
      </span>
    </div>
  );
}

/* ── Filter button ───────────────────────── */
function FilterBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-8 px-3 rounded-lg text-[12px] font-medium transition-all duration-150"
      style={{
        background: active ? "var(--c-accent)" : "var(--c-btn-bg)",
        color:      active ? "#fff" : "var(--c-text)",
        border:     `1px solid ${active ? "var(--c-accent)" : "var(--c-border)"}`,
      }}
    >
      {label}
    </button>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE
════════════════════════════════════════════ */
export default function RoomAssignments() {
  const { t }                 = useTranslation("roomAssignments");
  const [filter, setFilter]   = useState("all");
  const [search, setSearch]   = useState("");

  /* ── Filter + Search ─────────────────────── */
  const filtered = ASSIGNMENTS_DATA.filter((r) => {
    const matchFilter = filter === "all" || r.status === filter;
    const matchSearch = search === "" || [
      r.room, r.floor,
      t(`types.${r.typeKey}`),
      r.patient ?? "",
      r.doctor  ?? "",
    ].some((f) => f.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  /* ── Stats counts ────────────────────────── */
  const total       = ASSIGNMENTS_DATA.length;
  const occupied    = ASSIGNMENTS_DATA.filter((r) => r.status === "occupied").length;
  const available   = ASSIGNMENTS_DATA.filter((r) => r.status === "available").length;
  const critical    = ASSIGNMENTS_DATA.filter((r) => r.status === "critical").length;
  const maintenance = ASSIGNMENTS_DATA.filter((r) => r.status === "maintenance").length;

  const FILTERS = [
    { key: "all",         label: t("filters.all")         },
    { key: "occupied",    label: t("filters.occupied")    },
    { key: "available",   label: t("filters.available")   },
    { key: "critical",    label: t("filters.critical")    },
    { key: "maintenance", label: t("filters.maintenance") },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* ── Header ───────────────────────────── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BedDouble size={20} className="text-[var(--c-accent)]" />
          <h1 className="text-[20px] font-bold text-[var(--c-text)]">{t("pageTitle")}</h1>
        </div>
        <button
          className="h-9 px-4 rounded-[10px] text-[13px] font-semibold
                     bg-[var(--c-accent)] text-white hover:opacity-90
                     transition-opacity duration-150 whitespace-nowrap"
        >
          {t("assignRoom")}
        </button>
      </div>

      {/* ── Stats ────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <MiniStat value={total}       label={t("stats.total")}       color="var(--c-text)"  />
        <MiniStat value={occupied}    label={t("stats.occupied")}    color="#d97706"        />
        <MiniStat value={available}   label={t("stats.available")}   color="#16a34a"        />
        <MiniStat value={critical}    label={t("stats.critical")}    color="#dc2626"        />
      </div>

      {/* ── Room Map ─────────────────────────── */}
      <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">{t("mapTitle")}</h3>
          {/* Legend */}
          <div className="flex items-center gap-4 text-[11px]">
            {Object.entries(ROOM_STYLES).map(([key, val]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: val.border }} />
                <span className="text-[var(--c-sub)]">{t(`filters.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {ROOM_MAP.map((room) => (
            <RoomCard key={room.id} room={room} t={t} />
          ))}
        </div>
      </div>

      {/* ── Table Section ────────────────────── */}
      <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">

        {/* Filters + Search */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <FilterBtn
                key={f.key}
                label={f.label}
                active={filter === f.key}
                onClick={() => setFilter(f.key)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 h-9 px-3 rounded-[10px] w-52
                          bg-[var(--c-btn-bg)] border border-[var(--c-border)]">
            <Search size={14} className="text-[var(--c-icon)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("search")}
              className="bg-transparent border-none outline-none flex-1 text-[13px]
                         text-[var(--c-text)] placeholder:text-[var(--c-sub)]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-[var(--c-border)]">
                {["room","floor","type","patient","doctor","admitDate","status"].map((col) => (
                  <th key={col} className="py-2.5 px-3 text-start font-semibold text-[var(--c-sub)]">
                    {t(`table.${col}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[var(--c-border)] hover:bg-[var(--c-hov-bg)] transition-colors"
                >
                  <td className="py-3 px-3 font-semibold text-[var(--c-text)]">{row.room}</td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">{row.floor}</td>
                  <td className="py-3 px-3 text-[var(--c-text)]">{t(`types.${row.typeKey}`)}</td>
                  <td className="py-3 px-3 text-[var(--c-text)]">{row.patient ?? "—"}</td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">{row.doctor  ?? "—"}</td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">{row.admitDate ?? "—"}</td>
                  <td className="py-3 px-3">
                    <StatusBadge status={row.status} namespace="roomAssignments" />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-[var(--c-sub)] text-[13px]">
                    {t("noResults")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}