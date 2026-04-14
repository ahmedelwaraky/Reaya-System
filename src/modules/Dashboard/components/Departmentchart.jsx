import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ─────────────────────────────────────────────────────────────
// DepartmentChart — مخطط توزيع الأقسام (Donut)
// ─────────────────────────────────────────────────────────────

const DEPT_COLORS = ["#22c55e", "#f59e0b", "#3b82f6", "#ef4444", "#1F7EAD"];

export default function DepartmentChart({ colors: c }) {
  const { t } = useTranslation("dashboard");

  const data = [
    { name: t("departments.cardiology"), value: 30 },
    { name: t("departments.orthopedics"), value: 25 },
    { name: t("departments.pediatrics"), value: 20 },
    { name: t("departments.neurology"), value: 15 },
    { name: t("departments.general"), value: 10 },
  ];

  return (
    <div
      style={{
        flex: "0 0 340px",
        padding: "20px",
        backgroundColor: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: "14px",
        transition: "background 0.3s",
      }}
    >
      {/* العنوان */}
      <h3
        style={{
          fontSize: "15px",
          fontWeight: "700",
          color: c.text,
          marginBottom: "20px",
        }}
      >
        {t("departmentDist")}
      </h3>

      {/* الرسم */}
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={DEPT_COLORS[i % DEPT_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: c.bg,
              border: `1px solid ${c.border}`,
              borderRadius: "8px",
              color: c.text,
              fontSize: "13px",
            }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: "12px", color: c.subText }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
