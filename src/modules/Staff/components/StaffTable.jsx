import { useState } from "react";
import { useTranslation } from "react-i18next";

import DataTable from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions from "../../../component/ui/RowActions";

import { Ban, FileText, Key, RefreshCw } from "lucide-react";
import { STAFF_DATA } from "../api/staff.api";

export default function StaffTable() {
  const { t } = useTranslation("staff");
  const [search, setSearch] = useState("");

  /* ── Map keys → translated labels ───────── */
  const allRows = STAFF_DATA.map((r) => ({
    ...r,
    role: t(`roles.${r.roleKey}`),
    dept: t(`departments.${r.deptKey}`),
  }));

  /* ── Filter ─────────────────────────────── */
  const rows = allRows.filter((r) =>
    [r.name, r.role, r.dept].some((f) =>
      f.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  /* ── Columns ────────────────────────────── */
  const columns = [
    { key: "id", label: t("table.id"), width: "60px" },
    { key: "name", label: t("table.name"), width: "180px" },
    { key: "role", label: t("table.role"), width: "160px" },
    { key: "dept", label: t("table.dept"), width: "140px" },
    { key: "phone", label: t("table.phone"), width: "130px" },
    {
      key: "status",
      label: t("table.status"),
      width: "110px",
      render: (val) => <StatusBadge status={val} namespace="staff" />,
    },
    {
      key: "actions",
      label: t("table.actions"),
      width: "140px",
      render: (_, row) => (
        <RowActions
          onView={() => console.log("view", row.id)}
          onEdit={() => console.log("edit", row.id)}
          onDelete={() => console.log("delete", row.id)}
          extraActions={[
            {
              label: t("actions.viewReport"),
              icon: FileText,
              variant: "default",
              onClick: () => console.log("report", row.id),
            },
            {
              label: t("actions.resetPassword"),
              icon: Key,
              variant: "warning",
              onClick: () => console.log("reset", row.id),
            },
            {
              label: t("actions.reactivate"),
              icon: RefreshCw,
              variant: "success",
              onClick: () => console.log("reactivate", row.id),
            },
            {
              label: t("actions.ban"),
              icon: Ban,
              variant: "danger",
              onClick: () => console.log("ban", row.id),
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