import { useTranslation } from "react-i18next";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

// ─────────────────────────────────────────────────────────────
// WeeklyChart — مخطط المرضى الأسبوعي (Bar Chart)
// ─────────────────────────────────────────────────────────────
export default function WeeklyChart({ colors: c }) {
  const { t } = useTranslation("dashboard");

  const data = [
    { day: t("days.sat"), patients: 45 },
    { day: t("days.sun"), patients: 62 },
    { day: t("days.mon"), patients: 58 },
    { day: t("days.tue"), patients: 71 },
    { day: t("days.wed"), patients: 54 },
    { day: t("days.thu"), patients: 40 },
    { day: t("days.fri"), patients: 19 },
  ];

  return (
    <div style={{
      flex:            "1 1 500px",
      padding:         "20px",
      backgroundColor: c.bg,
      border:          `1px solid ${c.border}`,
      borderRadius:    "14px",
      transition:      "background 0.3s",
    }}>
      {/* العنوان */}
      <h3 style={{
        fontSize:    "15px",
        fontWeight:  "700",
        color:       c.text,
        marginBottom:"20px",
      }}>
        {t("weeklyPatients")}
      </h3>

      {/* الرسم */}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={32}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={c.border}
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fill: c.subText, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: c.subText, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: c.bg,
              border:          `1px solid ${c.border}`,
              borderRadius:    "8px",
              color:           c.text,
              fontSize:        "13px",
            }}
            cursor={{ fill: c.hoverBg }}
          />
          <Bar
            dataKey="patients"
            fill={c.accent}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}