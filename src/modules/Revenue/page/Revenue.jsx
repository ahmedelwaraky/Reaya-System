import { useTranslation } from "react-i18next";
import {
  DollarSign, TrendingDown, TrendingUp,
  BadgePercent, FileText, CheckCircle2,
  Clock, AlertTriangle,
} from "lucide-react";
import {
  BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";

import StatCard        from "../../../component/ui/StatCard";
import DonutChartCard  from "../../../component/ui/DonutChartCard";
import RadialChartCard from "../../../component/ui/RadialChartCard";
import StatusBadge     from "../../../component/ui/StatusBadge";

import {
  REVENUE_STATS,
  REVENUE_VS_EXPENSES,
  DAILY_REVENUE,
  REVENUE_BY_DEPT,
  PAYMENT_METHODS,
  NET_PROFIT_TREND,
  TOP_PATIENTS,
} from "../api/revenue.api";

/* ── Shared chart styles ─────────────────── */
const TICK  = { fontSize: 10, fill: "var(--c-muted,#9ca3af)" };
const GRID  = { strokeDasharray: "3 3", stroke: "var(--c-border)", vertical: false };
const TIP   = {
  borderRadius: "10px", border: "1px solid var(--c-border)",
  background: "var(--c-bg)", color: "var(--c-text)", fontSize: "12px",
};

/* ── Reusable card wrapper ───────────────── */
function Card({ title, children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4 ${className}`}>
      {title && <h3 className="text-[14px] font-semibold text-[var(--c-text)]">{title}</h3>}
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════
   REVENUE PAGE
════════════════════════════════════════════ */
export default function Revenue() {
  const { t } = useTranslation("revenue");
  const s     = REVENUE_STATS;

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-[20px] font-bold text-[var(--c-text)]">
        {t("pageTitle")}
      </h1>

      {/* ── Row 1: 4 main stats ──────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label={t("stats.monthlyRevenue")} value={s.monthlyRevenue.value} change={s.monthlyRevenue.change} icon={DollarSign}  />
        <StatCard label={t("stats.expenses")}       value={s.expenses.value}       change={s.expenses.change}       icon={TrendingDown} />
        <StatCard label={t("stats.netProfit")}      value={s.netProfit.value}      change={s.netProfit.change}      icon={TrendingUp}   />
        <StatCard label={t("stats.collectionRate")} value={s.collectionRate.value} change={s.collectionRate.change} icon={BadgePercent} />
      </div>

      {/* ── Row 2: Invoice stats ─────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label={t("stats.totalInvoices")} value={s.totalInvoices.value} change={s.totalInvoices.change} icon={FileText}       />
        <StatCard label={t("stats.paid")}          value={s.paid.value}          change={null}                   icon={CheckCircle2}   />
        <StatCard label={t("stats.pending")}       value={s.pending.value}       change={null}                   icon={Clock}          />
        <StatCard label={t("stats.overdue")}       value={s.overdue.value}       change={null}                   icon={AlertTriangle}  />
      </div>

      {/* ── Row 3: Main charts ───────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        {/* Grouped bar — revenue vs expenses */}
        <Card title={t("charts.revenueVsExpenses")}>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_VS_EXPENSES} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid {...GRID} />
                <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
                <YAxis tick={TICK} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={TIP} cursor={{ fill: "var(--c-hov-bg,rgba(0,0,0,.04))" }} />
                <Legend wrapperStyle={{ fontSize: "12px" }} formatter={(v) => <span style={{ color: "var(--c-text)" }}>{t(`legend.${v}`)}</span>} />
                <Bar dataKey="revenue"  fill="#1f7ead" radius={[6, 6, 0, 0]} maxBarSize={28} />
                <Bar dataKey="expenses" fill="#10b981" radius={[6, 6, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Area — daily revenue */}
        <Card title={t("charts.dailyRevenue")}>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DAILY_REVENUE} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#1f7ead" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#1f7ead" stopOpacity={0}   />
                  </linearGradient>
                </defs>
                <CartesianGrid {...GRID} />
                <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
                <YAxis tick={TICK} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={TIP} cursor={{ stroke: "var(--c-border)", strokeWidth: 1 }} />
                <Area
                  type="monotone" dataKey="value"
                  stroke="#1f7ead" strokeWidth={2.5}
                  fill="url(#revGrad)"
                  dot={{ r: 3, fill: "#1f7ead", strokeWidth: 0 }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>

      {/* ── Row 4: Dept + Payment + Net Profit ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {/* Bar — revenue by department */}
        <Card title={t("charts.revenueByDept")}>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_BY_DEPT} layout="vertical" margin={{ top: 0, right: 8, left: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--c-border)" horizontal={false} />
                <XAxis type="number" tick={TICK} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={TICK} axisLine={false} tickLine={false} width={55} />
                <Tooltip contentStyle={TIP} cursor={{ fill: "var(--c-hov-bg,rgba(0,0,0,.04))" }} />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 6, 6, 0]} maxBarSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Donut — payment methods */}
        <DonutChartCard
          title={t("charts.paymentMethods")}
          data={PAYMENT_METHODS}
        />

        {/* Radial — net profit trend (relative) */}
        <RadialChartCard
          title={t("charts.netProfitTrend")}
          data={NET_PROFIT_TREND}
          colors={["#1f7ead", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#ec4899"]}
          legendPosition="side"
        />

      </div>

      {/* ── Row 5: Top paying patients ───────── */}
      <Card title={t("topPatients.title")}>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-[var(--c-border)]">
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">{t("topPatients.name")}</th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">{t("topPatients.invoices")}</th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">{t("topPatients.total")}</th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">{t("topPatients.status")}</th>
              </tr>
            </thead>
            <tbody>
              {TOP_PATIENTS.map((p) => (
                <tr key={p.id} className="border-b border-[var(--c-border)] hover:bg-[var(--c-hov-bg)] transition-colors">
                  <td className="py-3 px-3 font-medium text-[var(--c-text)]">{p.name}</td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">{p.invoices}</td>
                  <td className="py-3 px-3 font-semibold text-[var(--c-text)]">
                    {p.total.toLocaleString()} {t("currency")}
                  </td>
                  <td className="py-3 px-3">
                    <StatusBadge status={p.status} namespace="revenue" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

    </div>
  );
}