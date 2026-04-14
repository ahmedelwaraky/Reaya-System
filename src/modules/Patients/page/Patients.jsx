import { useTranslation } from "react-i18next";
import { UserCheck, Users, Shield, HeartPulse } from "lucide-react";

import StatCard      from "../../../component/ui/StatCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import AreaChartCard  from "../../../component/ui/AreaChartCard";
import PatientsTable  from "../components/PatientsTable";

export default function Patients() {
  const { t } = useTranslation("patients");

  /* Stats */
  const stats = [
    { label: t("stats.total"),    value: "1,247", change: 12,   icon: Users      },
    { label: t("stats.active"),   value: "1,089", change: 8,    icon: UserCheck  },
    { label: t("stats.insured"),  value: "956",   change: null, icon: Shield     },
    { label: t("stats.critical"), value: "23",    change: null, icon: HeartPulse },
  ];

  /* Donut — by gender */
  const genderData = [
    { name: `${t("gender.male")} (580)`,   value: 580 },
    { name: `${t("gender.female")} (520)`, value: 520 },
    { name: `${t("gender.child")} (147)`,  value: 147 },
  ];
  const genderColors = ["#1f7ead", "#e91e8c", "#f59e0b"];

  /* Area — by month */
  const monthlyData = [
    { name: t("months.jan"), total: 380, active: 310 },
    { name: t("months.feb"), total: 420, active: 350 },
    { name: t("months.mar"), total: 460, active: 390 },
    { name: t("months.apr"), total: 490, active: 420 },
    { name: t("months.may"), total: 530, active: 460 },
    { name: t("months.jun"), total: 580, active: 500 },
  ];

  const areas = [
    { key: "total",  color: "#1f7ead", label: t("stats.total")  },
    { key: "active", color: "#10b981", label: t("stats.active") },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <DonutChartCard
          title={t("charts.byGender")}
          data={genderData}
          colors={genderColors}
        />
        <AreaChartCard
          title={t("charts.byMonth")}
          data={monthlyData}
          areas={areas}
        />
      </div>

      {/* Table */}
      <PatientsTable />

    </div>
  );
}