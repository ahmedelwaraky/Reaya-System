import { useTranslation } from "react-i18next";
import { Map } from "lucide-react";

const ROOM_STATUS = {
  available:   { bg: "#f0fdf4", border: "#86efac", text: "#16a34a", label: "متاحة"  },
  occupied:    { bg: "#eff6ff", border: "#93c5fd", text: "#2563eb", label: "مشغولة" },
  critical:    { bg: "#fef2f2", border: "#fca5a5", text: "#dc2626", label: "حرجة"   },
  maintenance: { bg: "#f9fafb", border: "#d1d5db", text: "#9ca3af", label: "صيانة"  },
};

function RoomCard({ room }) {
  const s = ROOM_STATUS[room.status] ?? ROOM_STATUS.available;
  return (
    <div
      className="flex flex-col items-center justify-center px-3 py-2.5 rounded-xl
                 cursor-pointer transition-all hover:scale-[1.02] select-none"
      style={{ background: s.bg, border: `1.5px solid ${s.border}`, minWidth: 90 }}
    >
      <span className="text-[13px] font-bold" style={{ color: s.text }}>
        {room.name}
      </span>
      {room.patient && (
        <span className="text-[10px] mt-0.5" style={{ color: s.text }}>
          {room.patient}
        </span>
      )}
    </div>
  );
}

/**
 * @param {Array} floors — [{ id, labelKey, rooms: [{ id, name, status, patient? }] }]
 */
export default function HospitalLiveMap({ floors = [] }) {
  const { t } = useTranslation("dashboard");

  const total     = floors.flatMap((f) => f.rooms).length;
  const available = floors.flatMap((f) => f.rooms).filter((r) => r.status === "available").length;
  const occupied  = floors.flatMap((f) => f.rooms).filter((r) => r.status === "occupied").length;
  const critical  = floors.flatMap((f) => f.rooms).filter((r) => r.status === "critical").length;

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Map size={16} className="text-[var(--c-accent)]" />
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
            {t("liveMap.title")}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-[var(--c-sub)]">{t("liveMap.critical")} {critical}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-[var(--c-sub)]">{t("liveMap.occupied")} {occupied}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[var(--c-sub)]">{t("liveMap.available")} {available}</span>
          </span>
          <span className="text-[var(--c-accent)] font-semibold">
            {t("liveMap.total")} {total} {t("liveMap.room")}
          </span>
        </div>
      </div>

      {/* Floors */}
      <div className="flex flex-col gap-4">
        {floors.map((floor) => (
          <div key={floor.id} className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-[var(--c-sub)]">
              {t(floor.labelKey)}
            </span>
            <div className="flex flex-wrap gap-2">
              {floor.rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 flex-wrap pt-1 border-t border-[var(--c-border)]">
        {Object.entries(ROOM_STATUS).map(([key, val]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: val.border }} />
            <span className="text-[11px] text-[var(--c-sub)]">{val.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}