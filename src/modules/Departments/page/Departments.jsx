import { useTranslation } from "react-i18next";
import { Building2, Stethoscope, Hotel, Users } from "lucide-react";

import StatCard          from "../../../component/ui/StatCard";
import BarChartCard      from "../../../component/ui/BarChartCard";
import RadialChartCard   from "../../../component/ui/RadialChartCard";
import DepartmentsTable  from "../components/DepartmentsTable";

export default function Departments() {
  const { t } = useTranslation("departments");

  /* Stats */
  const stats = [
    { label: t("stats.total"),    value: "8",     change: null, icon: Building2   },
    { label: t("stats.doctors"),  value: "49",    change: null, icon: Stethoscope },
    { label: t("stats.rooms"),    value: "76",    change: null, icon: Hotel       },
    { label: t("stats.patients"), value: "1,247", change: 12,   icon: Users       },
  ];

  /* Radial — rooms by dept */
  const roomsData = [
    { name: `${t("deptNames.cardiology")} (15)`,    value: 15 },
    { name: `${t("deptNames.orthopedics")} (12)`,   value: 12 },
    { name: `${t("deptNames.obstetrics")} (11)`,    value: 11 },
    { name: `${t("deptNames.neurology")} (10)`,     value: 10 },
    { name: `${t("deptNames.pediatricsDep")} (9)`,  value: 9  },
  ];
  const radialColors = ["#1f7ead", "#10b981", "#f59e0b", "#10b981", "#ef4444"];

  /* Bar — doctors per dept */
  const doctorsData = [
    { name: t("deptNames.cardiology"),    value: 10 },
    { name: t("deptNames.orthopedics"),   value: 8  },
    { name: t("deptNames.pediatrics"),    value: 7  },
    { name: t("deptNames.neurology"),     value: 6  },
    { name: t("deptNames.obstetrics"),    value: 6  },
    { name: t("deptNames.pediatricsDep"), value: 5  },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <RadialChartCard
          title={t("charts.byRooms")}
          data={roomsData}
          colors={radialColors}
          legendPosition="side"
        />
        <BarChartCard
          title={t("charts.byDoctors")}
          data={doctorsData}
        />
      </div>

      {/* Table */}
      <DepartmentsTable />

    </div>
  );
}