import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { INSURANCE_DATA } from "../api/insurance.api";

const STATUS_VARIANT = {
  active:    "success",
  suspended: "warning",
};

export default function InsuranceTable() {
  const { t }               = useTranslation("insurance");
  const [search, setSearch] = useState("");

  const allRows = INSURANCE_DATA.map((r) => ({
    ...r,
    coverageFmt: `${r.coverage}%`,
  }));

  const rows = allRows.filter((r) =>
    [r.company, r.policyNo].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    { key: "id",          label: t("table.id"),       width: "55px"  },
    { key: "company",     label: t("table.company"),  width: "180px" },
    { key: "policyNo",    label: t("table.policyNo"), width: "130px" },
    { key: "coverageFmt", label: t("table.coverage"), width: "130px" },
    { key: "patients",    label: t("table.patients"), width: "130px" },
    {
      key: "status",
      label: t("table.status"),
      width: "110px",
      render: (val) => (
        <StatusBadge
          status={val}
          variant={STATUS_VARIANT[val]}
          namespace="insurance"
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