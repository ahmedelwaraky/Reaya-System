import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { BUILDINGS_DATA } from "../api/buildings.api";
import { FileText, Wrench, PowerOff } from "lucide-react";

export default function BuildingsTable() {
  const { t }               = useTranslation("buildings");
  const [search, setSearch] = useState("");

  /* ── Map keys → translated labels ───────── */
  const allRows = BUILDINGS_DATA.map((r) => ({
    ...r,
    buildingName: t(`buildingNames.${r.nameKey}`),
  }));

  /* ── Filter ─────────────────────────────── */
  const rows = allRows.filter((r) =>
    [r.buildingName, r.manager].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "id",           label: t("table.id"),          width: "60px"  },
    { key: "buildingName", label: t("table.name"),         width: "180px" },
    { key: "floors",       label: t("table.floors"),       width: "110px" },
    { key: "departments",  label: t("table.departments"),  width: "130px" },
    { key: "rooms",        label: t("table.rooms"),        width: "100px" },
    { key: "manager",      label: t("table.manager"),      width: "170px" },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => <StatusBadge status={val} namespace="buildings" />,
    },
    {
      key: "actions",
      label: t("table.actions"),
      width: "140px",
      render: (_, row) => (
        <RowActions
          onView={()  => console.log("view",   row.id)}
          onEdit={()  => console.log("edit",   row.id)}
          onDelete={() => console.log("delete", row.id)}
          extraActions={[
            {
              label:   t("actions.viewReport"),
              icon:    FileText,
              variant: "default",
              onClick: () => console.log("report", row.id),
            },
            {
              label:   t("actions.maintenance"),
              icon:    Wrench,
              variant: "warning",
              onClick: () => console.log("maintenance", row.id),
            },
            {
              label:   t("actions.deactivate"),
              icon:    PowerOff,
              variant: "danger",
              onClick: () => console.log("deactivate", row.id),
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