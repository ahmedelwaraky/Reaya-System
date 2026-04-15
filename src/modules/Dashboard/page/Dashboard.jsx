import { useTranslation } from "react-i18next";
import { UserCheck, Stethoscope, Calendar, DollarSign } from "lucide-react";

import StatCard from "../../../component/ui/StatCard";
import BarChartCard from "../../../component/ui/BarChartCard";
import DonutChartCard from "../../../component/ui/DonutChartCard";
import ActivityList from "../../../component/ui/ActivityList";
import AIInsightsPanel from "../../../component/ui/AIInsightsPanel";
import SmartNotifications from "../../../component/ui/SmartNotifications";
import HospitalLiveMap from "../../../component/ui/HospitalLiveMap";
import DeptLoadChart from "../../../component/ui/DeptLoadChart";
import SmartQueue from "../../../component/ui/SmartQueue";
import PatientForecastChart from "../../../component/ui/PatientForecastChart";

export default function Dashboard() {
  const { t } = useTranslation("dashboard");

  /* ── Stats ───────────────────────────────── */
  const stats = [
    {
      label: t("stats.totalPatients"),
      value: "1,247",
      change: 12,
      icon: UserCheck,
    },
    {
      label: t("stats.totalDoctors"),
      value: "86",
      change: 3,
      icon: Stethoscope,
    },
    {
      label: t("stats.todayAppointments"),
      value: "34",
      change: 8,
      icon: Calendar,
    },
    {
      label: t("stats.monthlyRevenue"),
      value: "٢٤٥,٠٠٠ ر.س",
      change: 15,
      icon: DollarSign,
    },
  ];

  /* ── AI Insights ─────────────────────────── */
  const insights = [
    {
      id: 1,
      titleKey: "insights.erOverload",
      descKey: "insights.erOverloadDesc",
      variant: "danger",
    },
    {
      id: 2,
      titleKey: "insights.doctorBalance",
      descKey: "insights.doctorBalanceDesc",
      variant: "warning",
    },
    {
      id: 3,
      titleKey: "insights.visitIncrease",
      descKey: "insights.visitIncreaseDesc",
      variant: "info",
    },
    {
      id: 4,
      titleKey: "insights.nurseShortage",
      descKey: "insights.nurseShortageDesc",
      variant: "danger",
    },
    {
      id: 5,
      titleKey: "insights.eveningClinic",
      descKey: "insights.eveningClinicDesc",
      variant: "warning",
    },
  ];

  /* ── Smart Notifications ─────────────────── */
  const notifications = [
    {
      id: 1,
      titleKey: "notif.criticalPatient",
      descKey: "notif.criticalPatientDesc",
      timeKey: "notif.now",
      variant: "danger",
    },
    {
      id: 2,
      titleKey: "notif.medicineShortage",
      descKey: "notif.medicineShortageDesc",
      timeKey: "notif.10mins",
      variant: "warning",
    },
    {
      id: 3,
      titleKey: "notif.lateAppointment",
      descKey: "notif.lateAppointmentDesc",
      timeKey: "notif.30mins",
      variant: "info",
    },
    {
      id: 4,
      titleKey: "notif.insuranceUpdate",
      descKey: "notif.insuranceUpdateDesc",
      timeKey: "notif.1hour",
      variant: "neutral",
    },
  ];

  /* ── Hospital Live Map ───────────────────── */
  const floors = [
    {
      id: 1,
      labelKey: "liveMap.floor0",
      rooms: [
        { id: "e1", name: "طوارئ 1", status: "critical", patient: "أحد" },
        { id: "e2", name: "طوارئ 2", status: "occupied", patient: "قلبية" },
        { id: "e3", name: "طوارئ 3", status: "available" },
        { id: "e4", name: "طوارئ 4", status: "occupied", patient: "جرح" },
        { id: "e5", name: "الاستقبال", status: "occupied" },
        { id: "e6", name: "الفرز", status: "available" },
      ],
    },
    {
      id: 2,
      labelKey: "liveMap.floor1",
      rooms: [
        { id: "r101", name: "101", status: "occupied", patient: "سمير" },
        { id: "r102", name: "102", status: "occupied", patient: "هد" },
        { id: "r103", name: "103", status: "available" },
        { id: "r104", name: "104", status: "available" },
        { id: "r105", name: "105", status: "occupied", patient: "سلمى" },
        { id: "r106", name: "106", status: "critical", patient: "عماد" },
        { id: "r107", name: "107", status: "available" },
        { id: "r108", name: "108", status: "occupied", patient: "جزء" },
      ],
    },
    {
      id: 3,
      labelKey: "liveMap.floor2",
      rooms: [
        { id: "r201", name: "201", status: "occupied", patient: "لهو" },
        { id: "r202", name: "202", status: "available" },
        { id: "r203", name: "203", status: "available", patient: "رح" },
        { id: "r204", name: "204", status: "available" },
        { id: "r205", name: "205", status: "critical", patient: "حس" },
        { id: "op1", name: "عمليات 1", status: "occupied" },
        { id: "op2", name: "عمليات 2", status: "available" },
      ],
    },
  ];

  /* ── Patient Forecast ────────────────────── */
  const forecastData = [
    { name: t("days.sat"), actual: 65, predicted: 68 },
    { name: t("days.sun"), actual: 72, predicted: 75 },
    { name: t("days.mon"), actual: 78, predicted: 74 },
    { name: t("days.tue"), actual: 70, predicted: 72 },
    { name: t("days.wed"), actual: null, predicted: 78 },
    { name: t("days.thu"), actual: null, predicted: 65 },
    { name: t("days.fri"), actual: null, predicted: 30 },
  ];

  /* ── Dept Load ───────────────────────────── */
  const deptLoad = [
    { name: t("departments.emergency"), current: 92, predicted: 88 },
    { name: t("departments.cardiology"), current: 78, predicted: 82 },
    { name: t("departments.orthopedics"), current: 65, predicted: 70 },
    { name: t("departments.pediatrics"), current: 55, predicted: 60 },
    { name: t("departments.general"), current: 72, predicted: 68 },
  ];

  /* ── Smart Queue ─────────────────────────── */
  const queue = [
    {
      id: 1,
      rank: 1,
      name: "محمد العمري",
      code: "E-001",
      dept: "الطوارئ",
      type: "طوارئ",
      wait: "0 دقيقة",
      priority: "critical",
      priorityLabel: "حرج",
    },
    {
      id: 2,
      rank: 2,
      name: "سارة المالكي",
      code: "E-002",
      dept: "الطوارئ",
      type: "طوارئ",
      wait: "5 دقائق",
      priority: "urgent",
      priorityLabel: "عاجل",
    },
    {
      id: 3,
      rank: 3,
      name: "أحمد الدوسري",
      code: "A-015",
      dept: "القلب",
      type: "موعد",
      wait: "12 دقيقة",
      priority: "normal",
      priorityLabel: "عادي",
    },
    {
      id: 4,
      rank: 4,
      name: "هند الحربي",
      code: "A-016",
      dept: "العظام",
      type: "موعد",
      wait: "18 دقيقة",
      priority: "normal",
      priorityLabel: "عادي",
    },
    {
      id: 5,
      rank: 5,
      name: "يوسف المطيري",
      code: "R-008",
      dept: "الباطنية",
      type: "مراجعة",
      wait: "25 دقيقة",
      priority: "low",
      priorityLabel: "منخفض",
    },
    {
      id: 6,
      rank: 6,
      name: "نورة الغنزي",
      code: "A-017",
      dept: "الأطفال",
      type: "موعد",
      wait: "30 دقيقة",
      priority: "normal",
      priorityLabel: "عادي",
    },
    {
      id: 7,
      rank: 7,
      name: "فهد القرني",
      code: "R-009",
      dept: "الجلدية",
      type: "مراجعة",
      wait: "35 دقيقة",
      priority: "low",
      priorityLabel: "منخفض",
    },
  ];

  /* ── Dept Distribution (donut) ───────────── */
  const deptDist = [
    { name: t("departments.cardiology"), value: 35 },
    { name: t("departments.orthopedics"), value: 20 },
    { name: t("departments.pediatrics"), value: 18 },
    { name: t("departments.neurology"), value: 15 },
    { name: t("departments.general"), value: 12 },
  ];

  /* ── Weekly bar chart ────────────────────── */
  const weeklyData = [
    { name: t("days.sat"), value: 44 },
    { name: t("days.sun"), value: 62 },
    { name: t("days.mon"), value: 58 },
    { name: t("days.tue"), value: 69 },
    { name: t("days.wed"), value: 54 },
    { name: t("days.thu"), value: 39 },
    { name: t("days.fri"), value: 19 },
  ];

  /* ── Activities ──────────────────────────── */
  const activities = [
    {
      id: 1,
      label: t("activities.newPatient"),
      time: t("minutesAgo", { count: 5 }),
    },
    {
      id: 2,
      label: t("activities.appointmentConfirm"),
      time: t("minutesAgo", { count: 12 }),
    },
    {
      id: 3,
      label: t("activities.invoiceIssued"),
      time: t("minutesAgo", { count: 30 }),
    },
    {
      id: 4,
      label: t("activities.insuranceUpdated"),
      time: t("hoursAgo", { count: 1 }),
    },
    {
      id: 5,
      label: t("activities.newDoctor"),
      time: t("hoursAgo", { count: 2 }),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* ── Welcome ──────────────────────────── */}
      <div>
        <h1 className="text-[22px] font-bold text-[var(--c-text)]">
          {t("welcome")}، أحمد المالكي
        </h1>
        <p className="text-[13px] text-[var(--c-sub)] mt-0.5">
          {t("overview")}
        </p>
      </div>

      {/* ── Stats ────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      {/* ── AI Insights + Smart Notifications ── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <AIInsightsPanel title={t("insights.title")} items={insights} />
        <SmartNotifications title={t("notif.title")} items={notifications} />
      </div>

      {/* ── Live Map ─────────────────────────── */}
      <HospitalLiveMap floors={floors} />

      {/* ── Forecast + Dept Load ─────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <PatientForecastChart title={t("forecast.title")} data={forecastData} />
        <DeptLoadChart title={t("deptLoad.title")} data={deptLoad} />
      </div>

      {/* ── Smart Queue + Dept Donut ─────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-4">
        <SmartQueue queue={queue} avgWait={15} inTransit={7} />
        <DonutChartCard title={t("departmentDist")} data={deptDist} />
      </div>

      {/* ── Weekly Bar + Activities ───────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-4">
        <BarChartCard title={t("weeklyPatients")} data={weeklyData} />
        <ActivityList title={t("recentActivities")} items={activities} />
      </div>
    </div>
  );
}
