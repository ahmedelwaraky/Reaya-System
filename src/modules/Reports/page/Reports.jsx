import { useTranslation } from "react-i18next";

/* ── Shared UI ───────────────────────────── */
import DonutChartCard  from "../../../component/ui/DonutChartCard";
import RadialChartCard from "../../../component/ui/RadialChartCard";

/* ── Reports components ──────────────────── */
import MiniLineChart    from "../../../component/ui/MiniLineChart";
import ReportChartCard  from "../../../component/ui/ReportChartCard";
import MiniBarChart     from "../../../component/ui/MiniBarChart";
import SectionHeader    from "../../../component/ui/SectionHeader";
import SavedReportsList from "../../../component/ui/SavedReportsList";

/* ── Data ────────────────────────────────── */
import {
  MONTHLY_REVENUE,
  PATIENTS_BY_DEPT,
  INSURANCE_DIST,
  EMPLOYEES_BY_DEPT,
  DIAGNOSES_BY_CAT,
  APPOINTMENTS_MONTHLY,
  ROOMS_OCCUPANCY,
  PRESCRIPTIONS_MONTHLY,
  BUILDINGS_FLOORS,
  SAVED_REPORTS,
} from "../api/reports.api";

export default function Reports() {
  const { t } = useTranslation("reports");

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-[20px] font-bold text-[var(--c-text)]">
        {t("pageTitle")}
      </h1>

      {/* ════════════════════════════════════════
          1 — FINANCIAL
      ════════════════════════════════════════ */}
      <SectionHeader title={t("sections.financial")} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {/* Line — monthly revenue */}
        <ReportChartCard title={t("charts.monthlyRevenue")}>
          <MiniLineChart data={MONTHLY_REVENUE} color="#1f7ead" />
        </ReportChartCard>

        {/* Line — prescriptions */}
        <ReportChartCard title={t("charts.prescriptionsMonthly")}>
          <MiniLineChart data={PRESCRIPTIONS_MONTHLY} color="#10b981" />
        </ReportChartCard>

        {/* Radial — insurance distribution (4 items → rainbow مثالي) */}
        <RadialChartCard
          title={t("charts.insuranceDist")}
          data={INSURANCE_DIST}
          colors={["#1f7ead", "#10b981", "#f59e0b", "#ef4444"]}
          legendPosition="side"
        />

      </div>

      {/* ════════════════════════════════════════
          2 — CLINICAL
      ════════════════════════════════════════ */}
      <SectionHeader title={t("sections.clinical")} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {/* Bar — patients by dept (6 items → bar أوضح) */}
        <ReportChartCard title={t("charts.patientsByDept")}>
          <MiniBarChart data={PATIENTS_BY_DEPT} color="#14b8a6" />
        </ReportChartCard>

        {/* Radial — diagnoses by category (3 items → rainbow) */}
        <RadialChartCard
          title={t("charts.diagnosesByCat")}
          data={DIAGNOSES_BY_CAT}
          colors={["#6366f1", "#10b981", "#f59e0b"]}
          legendPosition="side"
        />

        {/* Bar — rooms occupancy */}
        <ReportChartCard title={t("charts.roomsOccupancy")}>
          <MiniBarChart data={ROOMS_OCCUPANCY} color="#f59e0b" />
        </ReportChartCard>

      </div>

      {/* ════════════════════════════════════════
          3 — OPERATIONS & HR
      ════════════════════════════════════════ */}
      <SectionHeader title={t("sections.operations")} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {/* Line — appointments (2 lines) */}
        <ReportChartCard title={t("charts.appointmentsMonthly")}>
          <MiniLineChart
            data={APPOINTMENTS_MONTHLY}
            color="#1f7ead"
            dataKey="value"
            dataKey2="value2"
            color2="#f59e0b"
            label={t("charts.appointmentsBooked")}
            label2={t("charts.appointmentsCancelled")}
          />
        </ReportChartCard>

        {/* Radial — employees by dept (5 items → rainbow) */}
        <RadialChartCard
          title={t("charts.employeesByDept")}
          data={EMPLOYEES_BY_DEPT}
          colors={["#8b5cf6", "#1f7ead", "#10b981", "#f59e0b", "#ef4444"]}
          legendPosition="side"
        />

        {/* Donut — buildings floors (5 items → donut) */}
        <DonutChartCard
          title={t("charts.buildingsFloors")}
          data={BUILDINGS_FLOORS}
        />

      </div>

      {/* ════════════════════════════════════════
          4 — SAVED REPORTS
      ════════════════════════════════════════ */}
      <SectionHeader title={t("sections.saved")} />

      <SavedReportsList reports={SAVED_REPORTS} />

    </div>
  );
}