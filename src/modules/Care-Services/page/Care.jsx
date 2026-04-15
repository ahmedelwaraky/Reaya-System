import { useTranslation } from "react-i18next";
import {
  HeartPulse,
  ActivitySquare,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import StatCard from "../../../component/ui/StatCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import CareTable from "../components/CareTable";
import LineChartCard from "../../../component/ui/Linechartcard";

export default function Care() {
  const { t } = useTranslation("care");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    { label: t("stats.total"), value: "8", change: null, icon: HeartPulse },
    {
      label: t("stats.usedToday"),
      value: "28",
      change: 10,
      icon: ActivitySquare,
    },
    {
      label: t("stats.avgCost"),
      value: "975 ر.س",
      change: null,
      icon: DollarSign,
    },
    {
      label: t("stats.monthGrowth"),
      value: "+18%",
      change: null,
      icon: TrendingUp,
    },
  ];

  /* ── Line chart — monthly usage ──────────── */
  const monthlyChart = [
    { name: t("months.jan"), value: 130, value2: 90 },
    { name: t("months.feb"), value: 140, value2: 92 },
    { name: t("months.mar"), value: 155, value2: 88 },
    { name: t("months.apr"), value: 160, value2: 95 },
    { name: t("months.may"), value: 158, value2: 93 },
    { name: t("months.jun"), value: 172, value2: 91 },
    { name: t("months.jul"), value: 168, value2: 94 },
  ];

  /* ── Donut chart — by category ───────────── */
  const categoryChart = [
    { name: t("categories.clinic"), value: 35 },
    { name: t("categories.rehab"), value: 20 },
    { name: t("categories.dental"), value: 15 },
    { name: t("categories.peds"), value: 12 },
    { name: t("categories.obgyn"), value: 10 },
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
        <LineChartCard
          title={t("charts.monthlyUsage")}
          data={monthlyChart}
          lines={[
            { key: "value", color: "#1f7ead", label: t("charts.line1") },
            { key: "value2", color: "#f59e0b", label: t("charts.line2") },
          ]}
        />
        <DonutChartCard title={t("charts.byCategory")} data={categoryChart} />
      </div>

      {/* ── Table ────────────────────────────── */}
      <CareTable />
    </div>
  );
}
