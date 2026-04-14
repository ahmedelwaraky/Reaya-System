import { useTranslation } from "react-i18next";
import { Shield, Users, DollarSign, CheckCircle } from "lucide-react";

import StatCard       from "../../../component/ui/StatCard";
import AreaChartCard  from "../../../component/ui/AreaChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import InsuranceTable from "../components/InsuranceTable";

export default function Insurance() {
  const { t } = useTranslation("insurance");

  /* Stats */
  const stats = [
    { label: t("stats.companies"), value: "6",          change: null, icon: Shield      },
    { label: t("stats.insured"),   value: "1,075",      change: 12,   icon: Users       },
    { label: t("stats.claims"),    value: "٨٥,٠٠٠ ر.س", change: null, icon: DollarSign  },
    { label: t("stats.approved"),  value: "142",        change: null, icon: CheckCircle },
  ];

  /* Area — monthly claims */
  const monthlyData = [
    { name: t("months.jan"), approved: 55,  rejected: 8  },
    { name: t("months.feb"), approved: 70,  rejected: 10 },
    { name: t("months.mar"), approved: 85,  rejected: 12 },
    { name: t("months.apr"), approved: 95,  rejected: 11 },
    { name: t("months.may"), approved: 110, rejected: 14 },
    { name: t("months.jun"), approved: 125, rejected: 15 },
  ];

  const areas = [
    { key: "approved", color: "#10b981", label: t("stats.approved") },
    { key: "rejected", color: "#ef4444", label: "مرفوضة"            },
  ];

  /* Donut — patients by insurer */
  const insurerData = [
    { name: `بوبا (312)`,          value: 312 },
    { name: `التعاونية (245)`,      value: 245 },
    { name: `ميدغلف (189)`,         value: 189 },
    { name: `الراجحي (156)`,        value: 156 },
    { name: `أخرى (173)`,           value: 173 },
  ];
  const insurerColors = ["#1f7ead", "#10b981", "#f59e0b", "#10b981", "#ef4444"];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <AreaChartCard
          title={t("charts.monthly")}
          data={monthlyData}
          areas={areas}
        />
        <DonutChartCard
          title={t("charts.byInsurer")}
          data={insurerData}
          colors={insurerColors}
          legendPosition="side"
        />
      </div>

      {/* Table */}
      <InsuranceTable />

    </div>
  );
}