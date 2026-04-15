import { useTranslation } from "react-i18next";
import { Receipt, DollarSign, CheckCircle, Clock } from "lucide-react";

import StatCard from "../../../component/ui/StatCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import AreaChartCard from "../../../component/ui/AreaChartCard";
import InvoicesTable from "../components/InvoicesTable";

export default function Invoices() {
  const { t } = useTranslation("invoices");

  /* Stats */
  const stats = [
    { label: t("stats.total"), value: "342", change: 18, icon: Receipt },
    {
      label: t("stats.revenue"),
      value: "٢٤٥,٠٠٠ ر.س",
      change: 12,
      icon: DollarSign,
    },
    { label: t("stats.paid"), value: "298", change: null, icon: CheckCircle },
    { label: t("stats.pending"), value: "44", change: null, icon: Clock },
  ];

  /* Area — monthly revenue vs expenses */
  const monthlyData = [
    { name: t("months.jan"), revenue: 180, expenses: 120 },
    { name: t("months.feb"), revenue: 210, expenses: 140 },
    { name: t("months.mar"), revenue: 245, expenses: 140 },
    { name: t("months.apr"), revenue: 230, expenses: 135 },
    { name: t("months.may"), revenue: 270, expenses: 150 },
    { name: t("months.jun"), revenue: 290, expenses: 155 },
  ];

  const areas = [
    { key: "revenue", color: "#10b981", label: t("stats.revenue") },
    { key: "expenses", color: "#ef4444", label: "المصروفات" },
  ];

  /* Donut — payment methods */
  const paymentData = [
    { name: `${t("payment.insurance")} (55)`, value: 55 },
    { name: `${t("payment.card")} (25)`, value: 25 },
    { name: `${t("payment.cash")} (15)`, value: 15 },
    { name: `${t("payment.transfer")} (5)`, value: 5 },
  ];
  const paymentColors = ["#1f7ead", "#10b981", "#f59e0b", "#8b5cf6"];

  return (
    <div className="flex flex-col gap-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <AreaChartCard
          title={t("charts.monthly")}
          data={monthlyData}
          areas={areas}
        />
        <DonutChartCard
          title={t("charts.byPayment")}
          data={paymentData}
          colors={paymentColors}
        //   legendPosition="side"
          />
      </div>

      {/* Table */}
      <InvoicesTable />
    </div>
  );
}
