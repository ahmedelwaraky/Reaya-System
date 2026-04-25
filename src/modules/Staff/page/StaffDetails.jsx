import React from "react";
import PageHeader from "../../../component/ui/PageHeader";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  Calendar,
  Delete,
  Edit,
  Pencil,
  Plus,
  Stethoscope,
  Trash,
  Trash2,
  User,
  Users,
  X,
} from "lucide-react";
import ActionButton from "../../../component/ui/ActionButton";
import StatusBadge from "../../../component/ui/StatusBadge";
import InfoCard from "../../../component/ui/InfoCard";
import TabbedTable from "../../../component/ui/TabTable";

export default function StaffDetails() {
  const { t } = useTranslation();
  const doctor = {
    name: "د. سارة القحطاني",
    phone: "0551234567",
    email: "sara@hms.sa",
    department: "القلب",
    status: "active",
  };

  const personalFields = [
    { label: t("doctorCard.fields.name"), value: doctor.name },
    { label: t("doctorCard.fields.phone"), value: doctor.phone },
    { label: t("doctorCard.fields.email"), value: doctor.email },
    { label: t("doctorCard.fields.department"), value: doctor.department },
    { label: t("doctorCard.fields.status"),value: doctor.status,isStatus: true,},
  ];

  const tabs = [
    {
      id: "patients",
      label: "المرضى",
      icon: Users,
      columns: [
        { key: "name", label: "اسم المريض" },
        { key: "age", label: "العمر" },
        { key: "phone", label: "الهاتف" },
        { key: "status", label: "الحالة", isStatus: true },
      ],
      rows: [
        {
          id: 1,
          name: "محمد العمري",
          age: "35",
          phone: "0551234567",
          status: "active",
        },
        {
          id: 2,
          name: "سارة المالكي",
          age: "28",
          phone: "0559876543",
          status: "pending",
        },
      ],
    },
    {
      id: "appointments",
      label: "المواعيد",
      icon: Calendar,
      columns: [
        { key: "patientName", label: "اسم المريض" },
        { key: "date", label: "التاريخ" },
        { key: "time", label: "الوقت" },
        { key: "type", label: "نوع الموعد" },
        { key: "status", label: "الحالة", isStatus: true },
      ],
      rows: [
        {
          id: 1,
          patientName: "محمد العمري",
          date: "2026-04-12",
          time: "09:00",
          type: "كشف",
          status: "approved",
        },
        {
          id: 2,
          patientName: "سارة المالكي",
          date: "2026-04-13",
          time: "09:00",
          type: "كشف",
          status: "pending",
        },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="الأطباء #1"
        subtitle="الأطباء #1"
        icon={Stethoscope}
        actions={[
          {
            label: "تعديل",
            icon: Pencil,
            variant: "primary",
            onClick: () => console.log("edit"),
          },
          {
            label: "حذف",
            icon: Trash2,
            variant: "danger",
            onClick: () => console.log("delete"),
          },
        ]}
        showBack={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          icon={User}
          title={t("doctorCard.personalInfo")}
          fields={personalFields}
        />
        <InfoCard
          icon={Briefcase}
          title={t("doctorCard.professionalInfo")}
          fields={personalFields}
        />
      </div>
      <div className="mt-3">
        <TabbedTable tabs={tabs} onView={(row) => console.log("view", row)} />
      </div>
    </>
  );
}
