import { useTranslation } from "react-i18next";
import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

import StatCard            from "../../../component/ui/StatCard";
import DonutChartCard      from "../../../component/ui/DonutChartCard";
import StackedBarChartCard from "../../../component/ui/StackedBarChartCard";
import AppointmentsTable   from "../components/AppointmentsTable";

export default function Appointments() {
  const { t } = useTranslation("appointments");

  /* Stats */
  const stats = [
    { label: t("stats.today"),     value: "34", change: 8,    icon: Calendar     },
    { label: t("stats.confirmed"), value: "22", change: null, icon: CheckCircle  },
    { label: t("stats.pending"),   value: "8",  change: null, icon: Clock        },
    { label: t("stats.cancelled"), value: "4",  change: null, icon: XCircle      },
  ];

  /* Stacked Bar — weekly */
  const weeklyData = [
    { name: t("days.sat"), checkup: 12, followup: 8,  emergency: 4, surgery: 3 },
    { name: t("days.sun"), checkup: 15, followup: 10, emergency: 3, surgery: 4 },
    { name: t("days.mon"), checkup: 10, followup: 12, emergency: 5, surgery: 2 },
    { name: t("days.tue"), checkup: 18, followup: 9,  emergency: 6, surgery: 5 },
    { name: t("days.wed"), checkup: 8,  followup: 7,  emergency: 2, surgery: 1 },
    { name: t("days.thu"), checkup: 6,  followup: 5,  emergency: 3, surgery: 2 },
  ];

  const bars = [
    { key: "checkup",   color: "#1f7ead", label: t("types.checkup")   },
    { key: "followup",  color: "#10b981", label: t("types.followup")  },
    { key: "emergency", color: "#ef4444", label: t("types.emergency") },
    { key: "surgery",   color: "#f59e0b", label: t("types.surgery")   },
  ];

  /* Donut — by type */
  const typeData = [
    { name: t("types.checkup"),   value: 45 },
    { name: t("types.followup"),  value: 30 },
    { name: t("types.emergency"), value: 12 },
    { name: t("types.surgery"),   value: 8  },
  ];
  const typeColors = ["#1f7ead", "#10b981", "#ef4444", "#f59e0b"];

  return (
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_3fr] gap-4">
        <StackedBarChartCard
          title={t("charts.weekly")}
          data={weeklyData}
          bars={bars}
        />
        <DonutChartCard
          title={t("charts.byType")}
          data={typeData}
          colors={typeColors}
        />
      </div>

      {/* Table */}
      <AppointmentsTable />

    </div>
  );
}