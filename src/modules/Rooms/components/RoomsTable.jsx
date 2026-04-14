import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { ROOMS_DATA } from "../api/rooms.api";

const STATUS_VARIANT = {
  available:   "success",
  occupied:    "info",
  maintenance: "warning",
};

export default function RoomsTable() {
  const { t }               = useTranslation("rooms");
  const [search, setSearch] = useState("");

  const allRows = ROOMS_DATA.map((r) => ({
    ...r,
    type: t(`types.${r.typeKey}`),
  }));

  const rows = allRows.filter((r) =>
    [r.roomNo, r.type, r.building, r.floor].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    { key: "id",       label: t("table.id"),       width: "55px"  },
    { key: "roomNo",   label: t("table.roomNo"),   width: "110px" },
    { key: "type",     label: t("table.type"),     width: "150px" },
    { key: "floor",    label: t("table.floor"),    width: "120px" },
    { key: "building", label: t("table.building"), width: "170px" },
    { key: "beds",     label: t("table.beds"),     width: "80px"  },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => (
        <StatusBadge
          status={val}
          variant={STATUS_VARIANT[val]}
          namespace="rooms"
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