import { useTranslation } from "react-i18next";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { TrendingUp } from "lucide-react";

const TICK = { fontSize: 10, fill: "var(--c-muted,#9ca3af)" };
const GRID = { strokeDasharray: "3 3", stroke: "var(--c-border)", vertical: false };
const TIP  = {
  borderRadius: "10px", border: "1px solid var(--c-border)",
  background: "var(--c-bg)", color: "var(--c-text)", fontSize: "12px",
};

/**
 * @param {string} title
 * @param {Array}  data  — [{ name, actual, predicted }]
 */
export default function PatientForecastChart({ title, data = [] }) {
  const { t } = useTranslation("dashboard");

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <TrendingUp size={16} className="text-[var(--c-accent)]" />
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">{title}</h3>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#1f7ead" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#1f7ead" stopOpacity={0}   />
              </linearGradient>
              <linearGradient id="predictedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#10b981" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}    />
              </linearGradient>
            </defs>
            <CartesianGrid {...GRID} />
            <XAxis dataKey="name" tick={TICK} axisLine={false} tickLine={false} />
            <YAxis tick={TICK} axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip contentStyle={TIP} cursor={{ stroke: "var(--c-border)", strokeWidth: 1 }} />
            <Legend
              wrapperStyle={{ fontSize: "12px" }}
              formatter={(v) => <span style={{ color: "var(--c-text)" }}>{t(`forecast.${v}`)}</span>}
            />
            <Area
              type="monotone" dataKey="actual"
              name="actual"
              stroke="#1f7ead" strokeWidth={2.5}
              fill="url(#actualGrad)"
              dot={{ r: 3, fill: "#1f7ead", strokeWidth: 0 }}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
            <Area
              type="monotone" dataKey="predicted"
              name="predicted"
              stroke="#10b981" strokeWidth={2} strokeDasharray="5 3"
              fill="url(#predictedGrad)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}