import { useTranslation } from "react-i18next";
import { Building, Layers, CheckSquare, LayoutGrid } from "lucide-react";

import StatCard       from "../../../component/ui/StatCard";
import BarChartCard   from "../../../component/ui/BarChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import BuildingsTable from "../components/BuildingsTable";

export default function Buildings() {
  const { t } = useTranslation("buildings");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    { label: t("stats.total"),       value: "8",   change: 1,    icon: Building    },
    { label: t("stats.totalFloors"), value: "31",  change: null, icon: Layers      },
    { label: t("stats.active"),      value: "6",   change: null, icon: CheckSquare },
    { label: t("stats.departments"), value: "47",  change: null, icon: LayoutGrid  },
  ];

  /* ── Bar chart — floors per building ─────── */
  const floorsChart = [
    { name: t("buildingNames.main"),        value: 8 },
    { name: t("buildingNames.outpatient"),  value: 5 },
    { name: t("buildingNames.admin"),       value: 4 },
    { name: t("buildingNames.surgical"),    value: 4 },
    { name: t("buildingNames.emergency"),   value: 3 },
    { name: t("buildingNames.maternity"),   value: 3 },
  ];

  /* ── Donut chart — rooms per building ────── */
  const roomsChart = [
    { name: t("buildingNames.main"),        value: 95 },
    { name: t("buildingNames.outpatient"),  value: 60 },
    { name: t("buildingNames.admin"),       value: 48 },
    { name: t("buildingNames.surgical"),    value: 42 },
    { name: t("buildingNames.emergency"),   value: 38 },
    { name: t("buildingNames.maternity"),   value: 34 },
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
        <BarChartCard
          title={t("charts.floorsByBuilding")}
          data={floorsChart}
        />
        <DonutChartCard
          title={t("charts.roomsByBuilding")}
          data={roomsChart}
        />
      </div>

      {/* ── Table ────────────────────────────── */}
      <BuildingsTable />

    </div>
  );
}