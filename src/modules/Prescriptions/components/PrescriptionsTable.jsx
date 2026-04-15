import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { PRESCRIPTIONS_DATA }          from "../api/prescriptions.api";
import { FileText, RefreshCw, AlertTriangle } from "lucide-react";

export default function PrescriptionsTable() {
  const { t }               = useTranslation("prescriptions");
  const [search, setSearch] = useState("");

  /* ── Map keys → translated labels ───────── */
  const allRows = PRESCRIPTIONS_DATA.map((r) => ({
    ...r,
    diagnosis: t(`diagnoses.${r.diagnosisKey}`),
  }));

  /* ── Filter ─────────────────────────────── */
  const rows = allRows.filter((r) =>
    [r.patient, r.doctor, r.diagnosis].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "id",        label: t("table.name"),      width: "60px"  },
    { key: "patient",   label: t("table.patient"),   width: "160px" },
    { key: "doctor",    label: t("table.doctor"),    width: "170px" },
    { key: "diagnosis", label: t("table.diagnosis"), width: "160px" },
    { key: "date",      label: t("table.date"),      width: "120px" },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => <StatusBadge status={val} namespace="prescriptions" />,
    },
    {
      key: "actions",
      label: t("table.actions"),
      width: "140px",
      render: (_, row) => (
        <RowActions
          onView={()   => console.log("view",   row.id)}
          onEdit={()   => console.log("edit",   row.id)}
          onDelete={()  => console.log("delete", row.id)}
          extraActions={[
            {
              label:   t("actions.viewReport"),
              icon:    FileText,
              variant: "default",
              onClick: () => console.log("report", row.id),
            },
            {
              label:   t("actions.refill"),
              icon:    RefreshCw,
              variant: "warning",
              onClick: () => console.log("refill", row.id),
            },
            {
              label:   t("actions.interaction"),
              icon:    AlertTriangle,
              variant: "danger",
              onClick: () => console.log("interaction", row.id),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <DataTable
      title={t("title")}
      columns={columns}
      data={rows}
      searchValue={search}
      onSearch={setSearch}
      searchPlaceholder={t("search")}
      pageSize={8}
      actions={
        <button
          className="h-9 px-4 rounded-[10px] text-[13px] font-semibold
                     bg-[var(--c-accent)] text-white hover:opacity-90
                     transition-opacity duration-150 whitespace-nowrap"
        >
          {t("addNew")}
        </button>
      }
    />
  );
}