import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";
import { MapPin, Building2 } from "lucide-react";;

import { GEO_DATA } from "../api/geography.api";

export default function GeoTable() {
  const { t }               = useTranslation("geography");
  const [search, setSearch] = useState("");

  /* ── Filter ─────────────────────────────── */
  const rows = GEO_DATA.filter((r) =>
    [r.name, r.code].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "id",        label: t("table.name"),      width: "60px"  },
    {
      key: "name",
      label: t("table.country"),
      width: "220px",
      render: (val) => (
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-[var(--c-accent)]" />
          <span>{val}</span>
        </div>
      ),
    },
    { key: "code",      label: t("table.code"),      width: "80px"  },
    { key: "cities",    label: t("table.cities"),    width: "100px" },
    {
      key: "hospitals",
      label: t("table.hospitals"),
      width: "110px",
      render: (val) => (
        <div className="flex items-center gap-1.5">
          <Building2 size={13} className="text-[var(--c-accent)]" />
          <span>{val}</span>
        </div>
      ),
    },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => <StatusBadge status={val} namespace="geography" />,
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