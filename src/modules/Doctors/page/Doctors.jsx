import { useTranslation } from "react-i18next";
import { Stethoscope, UserCheck, CalendarOff, Award } from "lucide-react";

import StatCard       from "../../../component/ui/StatCard";
import BarChartCard   from "../../../component/ui/BarChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import DoctorsTable   from "../components/DoctorsTable";

export default function Doctors() {
  const { t } = useTranslation("doctors");

  /* Stats */
  const stats = [
    { label: t("stats.total"),   value: "86", change: 3,    icon: Stethoscope },
    { label: t("stats.active"),  value: "78", change: null, icon: UserCheck   },
    { label: t("stats.onLeave"), value: "5",  change: null, icon: CalendarOff },
    { label: t("stats.senior"),  value: "24", change: null, icon: Award       },
  ];

  /* Bar chart — consultations per doctor */
  const consultChart = [
    { name: "د.سارة",   value: 45 },
    { name: "د.خالد",   value: 33 },
    { name: "د.فهد",    value: 30 },
    { name: "د.منال",   value: 27 },
    { name: "د.تركي",   value: 35 },
  ];

  /* Donut chart — by specialty */
  const specialtyChart = [
    { name: t("departments.cardiology"),  value: 12 },
    { name: t("departments.orthopedics"), value: 10 },
    { name: t("departments.pediatrics"),  value: 8  },
    { name: t("departments.neurology"),   value: 6  },
    { name: t("departments.general"),     value: 15 },
    { name: t("departments.internal"),    value: 11 },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <BarChartCard   title={t("charts.consultations")} data={consultChart}  />
        <DonutChartCard title={t("charts.bySpecialty")}   data={specialtyChart} />
      </div>

      {/* Table */}
      <DoctorsTable />

    </div>
  );
}