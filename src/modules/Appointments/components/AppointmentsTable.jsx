import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { APPOINTMENTS_DATA } from "../api/appointments.api";

/* ── Status → variant map ────────────────── */
const STATUS_VARIANT = {
  confirmed: "success",
  pending:   "warning",
  cancelled: "danger",
};

export default function AppointmentsTable() {
  const { t }               = useTranslation("appointments");
  const [search, setSearch] = useState("");

  const allRows = APPOINTMENTS_DATA.map((r) => ({
    ...r,
    type: t(`types.${r.typeKey}`),
  }));

  const rows = allRows.filter((r) =>
    [r.patient, r.doctor, r.type].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    { key: "id",      label: t("table.id"),      width: "55px"  },
    { key: "patient", label: t("table.patient"), width: "160px" },
    { key: "doctor",  label: t("table.doctor"),  width: "180px" },
    { key: "date",    label: t("table.date"),    width: "120px" },
    { key: "time",    label: t("table.time"),    width: "80px"  },
    { key: "type",    label: t("table.type"),    width: "100px" },
    {
      key: "status",
      label: t("table.status"),
      width: "130px",
      render: (val) => (
        <StatusBadge
          status={val}
          variant={STATUS_VARIANT[val]}
          namespace="appointments"
        />
      ),
    },
    {
      key: "actions",
      label: t("table.actions"),
      width: "120px",
      render: (_, row) => (
        <RowActions
          onView={()   => console.log("view",   row.id)}
          onEdit={()   => console.log("edit",   row.id)}
          onDelete={()  => console.log("delete", row.id)}
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