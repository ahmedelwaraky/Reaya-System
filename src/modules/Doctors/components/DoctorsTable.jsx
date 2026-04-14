import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { DOCTORS_DATA } from "../api/doctors.api";

export default function DoctorsTable() {
  const { t }               = useTranslation("doctors");
  const [search, setSearch] = useState("");

  /* ── Map keys → labels ──────────────────── */
  const allRows = DOCTORS_DATA.map((r) => ({
    ...r,
    dept:       t(`departments.${r.deptKey}`),
    experience: t("yearsExp", { count: r.experience }),
  }));

  /* ── Filter ─────────────────────────────── */
  const rows = allRows.filter((r) =>
    [r.name, r.dept].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "id",         label: t("table.id"),         width: "60px"  },
    { key: "name",       label: t("table.name"),       width: "200px" },
    { key: "dept",       label: t("table.dept"),       width: "150px" },
    { key: "phone",      label: t("table.phone"),      width: "140px" },
    { key: "experience", label: t("table.experience"), width: "110px" },
    {
      key: "status",
      label: t("table.status"),
      width: "110px",
      render: (val) => <StatusBadge status={val} namespace="doctors" />,
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