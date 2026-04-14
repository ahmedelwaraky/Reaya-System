import { useTranslation } from "react-i18next";
import { Hotel, CheckCircle, Users, Wrench } from "lucide-react";

import StatCard          from "../../../component/ui/StatCard";
import StackedBarChartCard from "../../../component/ui/StackedBarChartCard";
import RadialChartCard   from "../../../component/ui/RadialChartCard";
import RoomsTable        from "../components/RoomsTable";

export default function Rooms() {
  const { t } = useTranslation("rooms");

  /* Stats */
  const stats = [
    { label: t("stats.total"),       value: "120", change: null, icon: Hotel        },
    { label: t("stats.available"),   value: "68",  change: null, icon: CheckCircle  },
    { label: t("stats.occupied"),    value: "45",  change: null, icon: Users        },
    { label: t("stats.maintenance"), value: "7",   change: null, icon: Wrench       },
  ];

  /* Stacked Bar — occupancy by floor */
  const floorData = [
    { name: t("floors.f1"), available: 8,  occupied: 12, maintenance: 2 },
    { name: t("floors.f2"), available: 10, occupied: 15, maintenance: 1 },
    { name: t("floors.f3"), available: 12, occupied: 10, maintenance: 2 },
    { name: t("floors.f4"), available: 15, occupied: 8,  maintenance: 1 },
    { name: t("floors.f5"), available: 13, occupied: 10, maintenance: 1 },
    { name: t("floors.f6"), available: 10, occupied: 8,  maintenance: 0 },
  ];

  const bars = [
    { key: "available",   color: "#1f7ead", label: t("status.available")   },
    { key: "occupied",    color: "#10b981", label: t("status.occupied")    },
    { key: "maintenance", color: "#f59e0b", label: t("status.maintenance") },
  ];

  /* Radial — by type */
  const typeData = [
    { name: `${t("types.regular")} (45)`,   value: 45 },
    { name: `${t("types.vip")} (20)`,       value: 20 },
    { name: `${t("types.icu")} (15)`,       value: 15 },
    { name: `${t("types.surgery")} (18)`,   value: 18 },
    { name: `${t("types.maternity")} (12)`, value: 12 },
  ];
  const radialColors = ["#1f7ead", "#10b981", "#f59e0b", "#10b981", "#ef4444"];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <StackedBarChartCard
          title={t("charts.byFloor")}
          data={floorData}
          bars={bars}
        />
        <RadialChartCard
          title={t("charts.byType")}
          data={typeData}
          colors={radialColors}
          legendPosition="side"
        />
      </div>

      {/* Table */}
      <RoomsTable />

    </div>
  );
}