import { useTranslation } from "react-i18next";
import { FlaskConical, CalendarCheck, Clock, TrendingUp } from "lucide-react";

import StatCard from "../../../component/ui/StatCard";
import BarChartCard from "../../../component/ui/BarChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import DiagnosesTable from "../components/DiagnosesTable";

export default function Diagnoses() {
  const { t } = useTranslation("diagnoses");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    { label: t("stats.total"), value: "8", change: null, icon: FlaskConical },
    { label: t("stats.today"), value: "47", change: 15, icon: CalendarCheck },
    { label: t("stats.avgWait"), value: "45 د", change: null, icon: Clock },
    {
      label: t("stats.monthGrowth"),
      value: "+22%",
      change: null,
      icon: TrendingUp,
    },
  ];

  /* ── Donut chart — by category ───────────── */
  const categoryChart = [
    { name: t("categories.lab"), value: 55 },
    { name: t("categories.radiology"), value: 30 },
    { name: t("categories.cardio"), value: 15 },
  ];

  /* ── Stacked bar — daily exams ───────────── */
  const dailyChart = [
    { name: t("days.sat"), value: 40 },
    { name: t("days.sun"), value: 55 },
    { name: t("days.mon"), value: 48 },
    { name: t("days.tue"), value: 62 },
    { name: t("days.wed"), value: 58 },
    { name: t("days.thu"), value: 35 },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* ── Stats ────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* ── Charts ───────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <BarChartCard title={t("charts.dailyExams")} data={dailyChart} />
        <DonutChartCard title={t("charts.byCategory")} data={categoryChart} />
      </div>

      {/* ── Table ────────────────────────────── */}
      <DiagnosesTable />
    </div>
  );
}
