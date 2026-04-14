import { useTranslation } from "react-i18next";
import { UserCheck, Stethoscope, Calendar, DollarSign } from "lucide-react";
import StatCard       from "../../../component/ui/StatCard";
import BarChartCard   from "../../../component/ui/BarChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import ActivityList   from "../../../component/ui/ActivityList";

export default function Dashboard() {
  const { t } = useTranslation("dashboard");

  /* ── Stats ──────────────────────────────── */
  const stats = [
    { label: t("stats.totalPatients"),     value: "1,247",        change: 12,  icon: UserCheck   },
    { label: t("stats.totalDoctors"),      value: "86",           change: 3,   icon: Stethoscope },
    { label: t("stats.todayAppointments"), value: "34",           change: 8,   icon: Calendar    },
    { label: t("stats.monthlyRevenue"),    value: "٢٤٥,٠٠٠ ر.س", change: 15,  icon: DollarSign  },
  ];

  /* ── Bar chart ──────────────────────────── */
  const weeklyData = [
    { name: t("days.sat"), value: 44 },
    { name: t("days.sun"), value: 62 },
    { name: t("days.mon"), value: 58 },
    { name: t("days.tue"), value: 69 },
    { name: t("days.wed"), value: 54 },
    { name: t("days.thu"), value: 39 },
    { name: t("days.fri"), value: 19 },
  ];

  /* ── Donut chart ────────────────────────── */
  const deptData = [
    { name: t("departments.cardiology"),  value: 35 },
    { name: t("departments.orthopedics"), value: 20 },
    { name: t("departments.pediatrics"),  value: 18 },
    { name: t("departments.neurology"),   value: 15 },
    { name: t("departments.general"),     value: 12 },
  ];

  /* ── Activities ─────────────────────────── */
  const activities = [
    { id: 1, label: t("activities.newPatient"),         time: t("minutesAgo", { count: 5  }) },
    { id: 2, label: t("activities.appointmentConfirm"), time: t("minutesAgo", { count: 12 }) },
    { id: 3, label: t("activities.invoiceIssued"),      time: t("minutesAgo", { count: 30 }) },
    { id: 4, label: t("activities.insuranceUpdated"),   time: t("hoursAgo",   { count: 1  }) },
    { id: 5, label: t("activities.newDoctor"),          time: t("hoursAgo",   { count: 2  }) },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* Welcome */}
      <div>
        <h1 className="text-[22px] font-bold text-[var(--c-text)]">
          {t("welcome")}، أحمد المالكي
        </h1>
        <p className="text-[13px] text-[var(--c-sub)] mt-0.5">
          {t("overview")}
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <BarChartCard   title={t("weeklyPatients")} data={weeklyData} />
        <DonutChartCard title={t("departmentDist")} data={deptData}   />
      </div>

      {/* Activity */}
      <ActivityList title={t("recentActivities")} items={activities} />

    </div>
  );
}