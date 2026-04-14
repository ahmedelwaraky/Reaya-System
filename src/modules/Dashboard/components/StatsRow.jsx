import { useTranslation } from "react-i18next";
import { Users, Stethoscope, Calendar, DollarSign } from "lucide-react";
import StatCard from "./Statcard";

// ─────────────────────────────────────────────────────────────
// StatsRow — صف البطاقات الإحصائية الأربع
// ─────────────────────────────────────────────────────────────
export default function StatsRow({ colors: c }) {
  const { t } = useTranslation("dashboard");

  const stats = [
    {
      icon:   <Users size={22} />,
      label:  t("stats.totalPatients"),
      value:  "1,247",
      change: "+12%",
    },
    {
      icon:   <Stethoscope size={22} />,
      label:  t("stats.totalDoctors"),
      value:  "86",
      change: "+3",
    },
    {
      icon:   <Calendar size={22} />,
      label:  t("stats.todayAppointments"),
      value:  "34",
      change: "+8%",
    },
    {
      icon:   <DollarSign size={22} />,
      label:  t("stats.monthlyRevenue"),
      value:  "245,000",
      change: "+15%",
    },
  ];

  return (
    <div style={{
      display:   "flex",
      flexWrap:  "wrap",
      gap:       "16px",
    }}>
      {stats.map((s) => (
        <StatCard key={s.label} {...s} colors={c} />
      ))}
    </div>
  );
}