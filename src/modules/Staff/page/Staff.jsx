import { useTranslation } from "react-i18next";
import { Users, UserCheck, CalendarOff, Building2 } from "lucide-react";

import StatCard       from "../../../component/ui/StatCard";
import BarChartCard   from "../../../component/ui/BarChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import StaffTable     from "../components/StaffTable";            

export default function Staff() {
  const { t } = useTranslation("employees");

  /* Stats */
  const stats = [
    { label: t("stats.total"),       value: "156", change: 5,    icon: Users       },
    { label: t("stats.active"),      value: "142", change: null, icon: UserCheck   },
    { label: t("stats.onLeave"),     value: "8",   change: null, icon: CalendarOff },
    { label: t("stats.departments"), value: "12",  change: null, icon: Building2   },
  ];

  /* Bar chart */
  const deptChart = [
    { name: t("departments.admin"),      value: 22 },
    { name: t("departments.cardiology"), value: 18 },
    { name: t("departments.pediatrics"), value: 14 },
    { name: t("departments.lab"),        value: 12 },
    { name: t("departments.emergency"),  value: 20 },
  ];

  /* Donut chart */
  const roleChart = [
    { name: t("roles.nurse"),        value: 52 },
    { name: t("roles.labTech"),      value: 28 },
    { name: t("roles.accountant"),   value: 18 },
    { name: t("roles.pharmacist"),   value: 12 },
    { name: t("roles.receptionist"), value: 15 },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <BarChartCard   title={t("charts.byDepartment")} data={deptChart} />
        <DonutChartCard title={t("charts.byRole")}       data={roleChart} />
      </div>

      {/* Table ✅ منفصل تماماً */}
      <StaffTable />

    </div>
  );
}