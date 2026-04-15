import { useTranslation } from "react-i18next";
import { CalendarOff, CheckCircle2, Clock, XCircle } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

import StatCard       from "../../../component/ui/StatCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import LeavesTable    from "../components/LeavesTable";

import { MONTHLY_LEAVES, LEAVES_BY_TYPE } from "../api/leaves.api";

/* ── Shared chart styles ─────────────────── */
const TICK = { fontSize: 10, fill: "var(--c-muted,#9ca3af)" };
const GRID = { strokeDasharray: "3 3", stroke: "var(--c-border)", vertical: false };
const TIP  = {
  borderRadius: "10px", border: "1px solid var(--c-border)",
  background: "var(--c-bg)", color: "var(--c-text)", fontSize: "12px",
};

const STACK_COLORS = {
  annual:     "#1f7ead",
  sick:       "#f59e0b",
  emergency:  "#ef4444",
  conference: "#10b981",
};

export default function Leaves() {
  const { t } = useTranslation("leaves");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    { label: t("stats.total"),    value: "45", change: null, icon: CalendarOff  },
    { label: t("stats.approved"), value: "32", change: null, icon: CheckCircle2 },
    { label: t("stats.pending"),  value: "8",  change: null, icon: Clock        },
    { label: t("stats.rejected"), value: "5",  change: null, icon: XCircle      },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* ── Stats ────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* ── Charts ───────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        {/* Stacked Bar — monthly leaves by type */}
        <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
            {t("charts.monthly")}
          </h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_LEAVES} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid {...GRID} />
                <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
                <YAxis tick={TICK} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={TIP} cursor={{ fill: "var(--c-hov-bg,rgba(0,0,0,.04))" }} />
                <Legend
                  wrapperStyle={{ fontSize: "12px" }}
                  formatter={(v) => <span style={{ color: "var(--c-text)" }}>{t(`types.${v}`)}</span>}
                />
                <Bar dataKey="annual"     stackId="a" fill={STACK_COLORS.annual}     radius={[0, 0, 0, 0]} maxBarSize={36} />
                <Bar dataKey="sick"       stackId="a" fill={STACK_COLORS.sick}       maxBarSize={36} />
                <Bar dataKey="emergency"  stackId="a" fill={STACK_COLORS.emergency}  maxBarSize={36} />
                <Bar dataKey="conference" stackId="a" fill={STACK_COLORS.conference} radius={[6, 6, 0, 0]} maxBarSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut — leaves by type */}
        <DonutChartCard
          title={t("charts.byType")}
          data={LEAVES_BY_TYPE}
        />

      </div>

      {/* ── Table ────────────────────────────── */}
      <LeavesTable />

    </div>
  );
}