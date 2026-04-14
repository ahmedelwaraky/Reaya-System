import { useTranslation } from "react-i18next";
import { Activity } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// RecentActivities — قائمة آخر الأنشطة
// ─────────────────────────────────────────────────────────────
export default function RecentActivities({ colors: c }) {
  const { t } = useTranslation("dashboard");

  const activities = [
    { key: "newPatient",         time: t("minutesAgo",  { count: 5  }) },
    { key: "appointmentConfirm", time: t("minutesAgo",  { count: 12 }) },
    { key: "invoiceIssued",      time: t("minutesAgo",  { count: 30 }) },
    { key: "insuranceUpdated",   time: t("hoursAgo",    { count: 1  }) },
    { key: "newDoctor",          time: t("hoursAgo",    { count: 2  }) },
  ];

  return (
    <div style={{
      padding:         "20px",
      backgroundColor: c.bg,
      border:          `1px solid ${c.border}`,
      borderRadius:    "14px",
      transition:      "background 0.3s",
    }}>

      {/* العنوان */}
      <div style={{
        display:       "flex",
        alignItems:    "center",
        gap:           "8px",
        marginBottom:  "16px",
      }}>
        <Activity size={17} color={c.accent} />
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: c.text }}>
          {t("recentActivities")}
        </h3>
      </div>

      {/* القائمة */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {activities.map((a, i) => (
          <div key={a.key}>
            <div style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "space-between",
              padding:        "14px 0",
              gap:            "12px",
            }}>
              <span style={{ fontSize: "13.5px", color: c.text }}>
                {t(`activities.${a.key}`)}
              </span>
              <span style={{
                fontSize:   "12px",
                color:      c.subText,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                {a.time}
              </span>
            </div>

            {/* فاصل — ماعدا آخر عنصر */}
            {i < activities.length - 1 && (
              <div style={{ height: "1px", backgroundColor: c.border }} />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}