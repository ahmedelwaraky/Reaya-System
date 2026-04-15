import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { LEAVES_DATA }                    from "../api/leaves.api";
import { CheckCircle2, XCircle, FileText } from "lucide-react";

export default function LeavesTable() {
  const { t }               = useTranslation("leaves");
  const [search, setSearch] = useState("");

  /* ── Map keys → translated labels ───────── */
  const allRows = LEAVES_DATA.map((r) => ({
    ...r,
    leaveType: t(`types.${r.typeKey}`),
  }));

  /* ── Filter ─────────────────────────────── */
  const rows = allRows.filter((r) =>
    [r.staff, r.leaveType].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "id",        label: t("table.name"),      width: "60px"  },
    { key: "staff",     label: t("table.staff"),     width: "170px" },
    { key: "leaveType", label: t("table.leaveType"), width: "120px" },
    { key: "from",      label: t("table.from"),      width: "120px" },
    { key: "to",        label: t("table.to"),        width: "120px" },
    { key: "days",      label: t("table.days"),      width: "80px"  },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => <StatusBadge status={val} namespace="leaves" />,
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
              label:   t("actions.approve"),
              icon:    CheckCircle2,
              variant: "success",
              onClick: () => console.log("approve", row.id),
            },
            {
              label:   t("actions.reject"),
              icon:    XCircle,
              variant: "danger",
              onClick: () => console.log("reject", row.id),
            },
            {
              label:   t("actions.viewReport"),
              icon:    FileText,
              variant: "default",
              onClick: () => console.log("report", row.id),
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