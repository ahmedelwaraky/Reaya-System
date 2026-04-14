import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { DEPARTMENTS_DATA } from "../api/departments.api";

export default function DepartmentsTable() {
  const { t }               = useTranslation("departments");
  const [search, setSearch] = useState("");

  const rows = DEPARTMENTS_DATA.filter((r) =>
    [r.name, r.head].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    { key: "id",      label: t("table.id"),      width: "55px"  },
    { key: "name",    label: t("table.name"),    width: "200px" },
    { key: "head",    label: t("table.head"),    width: "200px" },
    { key: "doctors", label: t("table.doctors"), width: "130px" },
    { key: "rooms",   label: t("table.rooms"),   width: "100px" },
    {
      key: "status",
      label: t("table.status"),
      width: "110px",
      render: (val) => <StatusBadge status={val} namespace="departments" />,
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