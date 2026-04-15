import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { CARE_DATA }                from "../api/care.api";
import { FileText, CalendarPlus, Ban } from "lucide-react";

export default function CareTable() {
  const { t }               = useTranslation("care");
  const [search, setSearch] = useState("");

  /* ── Map keys → translated labels ───────── */
  const allRows = CARE_DATA.map((r) => ({
    ...r,
    serviceName:    t(`serviceNames.${r.nameKey}`),
    category:       t(`categories.${r.categoryKey}`),
    priceFormatted: `${r.price.toLocaleString()} ${t("currency")}`,
  }));

  /* ── Filter ─────────────────────────────── */
  const rows = allRows.filter((r) =>
    [r.serviceName, r.category, r.code].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "code",           label: t("table.code"),     width: "100px" },
    { key: "serviceName",    label: t("table.name"),     width: "220px" },
    { key: "category",       label: t("table.category"), width: "120px" },
    { key: "priceFormatted", label: t("table.price"),    width: "130px" },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => <StatusBadge status={val} namespace="care" />,
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
              label:   t("actions.bookAppointment"),
              icon:    CalendarPlus,
              variant: "warning",
              onClick: () => console.log("book", row.id),
            },
            {
              label:   t("actions.deactivate"),
              icon:    Ban,
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