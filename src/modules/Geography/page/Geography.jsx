import { useTranslation } from "react-i18next";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";


import { Globe, MapPin, Hospital, CheckCircle2 } from "lucide-react";
import StatCard       from "../../../component/ui/StatCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import GeoTable       from "../components/GeoTable";

import { CITIES_BY_COUNTRY, BRANCHES_BY_REGION } from "../api/geography.api";

/* ── Chart styles ────────────────────────── */
const TICK = { fontSize: 10, fill: "var(--c-muted,#9ca3af)" };
const GRID = { strokeDasharray: "3 3", stroke: "var(--c-border)", vertical: false };
const TIP  = {
  borderRadius: "10px", border: "1px solid var(--c-border)",
  background: "var(--c-bg)", color: "var(--c-text)", fontSize: "12px",
};

export default function Geography() {
  const { t } = useTranslation("geography");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    { label: t("stats.countries"),       value: "6",  change: null, icon: Globe        },
    { label: t("stats.cities"),          value: "33", change: null, icon: MapPin        },
    { label: t("stats.hospitals"),       value: "4",  change: null, icon: Hospital      },
    { label: t("stats.activeCountries"), value: "2",  change: null, icon: CheckCircle2  },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* ── Stats ────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* ── Charts ───────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        {/* Bar — cities by country */}
        <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
            {t("charts.citiesByCountry")}
          </h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CITIES_BY_COUNTRY} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid {...GRID} />
                <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
                <YAxis tick={TICK} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={TIP} cursor={{ fill: "var(--c-hov-bg,rgba(0,0,0,.04))" }} />
                <Bar dataKey="value" fill="#1f7ead" radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut — branches by region */}
        <DonutChartCard
          title={t("charts.branchesByRegion")}
          data={BRANCHES_BY_REGION}
        />

      </div>

      {/* ── Table ────────────────────────────── */}
      <GeoTable />

    </div>
  );
}