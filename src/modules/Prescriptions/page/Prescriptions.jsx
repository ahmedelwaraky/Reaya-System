import { useTranslation } from "react-i18next";
import { Pill, ClipboardList, Clock, AlertTriangle } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

import StatCard       from "../../../component/ui/StatCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import PrescriptionsTable from "../components/PrescriptionsTable";

export default function Prescriptions() {
  const { t } = useTranslation("prescriptions");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    { label: t("stats.total"),        value: "856", change: 22,   icon: Pill           },
    { label: t("stats.active"),       value: "234", change: null, icon: ClipboardList  },
    { label: t("stats.pendingRefill"),value: "18",  change: null, icon: Clock          },
    { label: t("stats.interactions"), value: "3",   change: null, icon: AlertTriangle  },
  ];

  /* ── Area chart — monthly prescriptions ─── */
  const monthlyData = [
    { name: t("months.jan"), issued: 110, refills: 12 },
    { name: t("months.feb"), issued: 125, refills: 10 },
    { name: t("months.mar"), issued: 132, refills: 14 },
    { name: t("months.apr"), issued: 128, refills: 11 },
    { name: t("months.may"), issued: 158, refills: 16 },
    { name: t("months.jun"), issued: 145, refills: 13 },
    { name: t("months.jul"), issued: 152, refills: 15 },
  ];

  /* ── Donut chart — top diagnoses ─────────── */
  const diagnosesChart = [
    { name: t("diagnoses.hypertension"), value: 28 },
    { name: t("diagnoses.diabetes2"),    value: 22 },
    { name: t("diagnoses.arthritis"),    value: 18 },
    { name: t("diagnoses.cholesterol"),  value: 15 },
    { name: t("diagnoses.other"),        value: 17 },
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

        {/* Area Chart */}
        <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
            {t("charts.perMonth")}
          </h3>
          <div className="w-full h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIssued" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#1f7ead" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#1f7ead" stopOpacity={0}   />
                  </linearGradient>
                  <linearGradient id="colorRefills" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#f59e0b" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}   />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--c-border)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "var(--c-muted, #9ca3af)" }}
                  axisLine={false} tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "var(--c-muted, #9ca3af)" }}
                  axisLine={false} tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "10px",
                    border: "1px solid var(--c-border)",
                    background: "var(--c-bg)",
                    color: "var(--c-text)",
                    fontSize: "12px",
                  }}
                  cursor={{ stroke: "var(--c-border)", strokeWidth: 1 }}
                />
                <Legend
                  wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
                  formatter={(value) => (
                    <span style={{ color: "var(--c-text)" }}>{value}</span>
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="issued"
                  name={t("charts.issued")}
                  stroke="#1f7ead"
                  strokeWidth={2.5}
                  fill="url(#colorIssued)"
                  dot={{ r: 4, fill: "#1f7ead", strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Area
                  type="monotone"
                  dataKey="refills"
                  name={t("charts.refills")}
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  fill="url(#colorRefills)"
                  dot={{ r: 4, fill: "#f59e0b", strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <DonutChartCard
          title={t("charts.topDiagnoses")}
          data={diagnosesChart}
        />
      </div>

      {/* ── Table ────────────────────────────── */}
      <PrescriptionsTable />

    </div>
  );
}