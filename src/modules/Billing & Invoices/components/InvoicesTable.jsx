import { useState }       from "react";
import { useTranslation } from "react-i18next";

import DataTable   from "../../../component/ui/DataTable";
import StatusBadge from "../../../component/ui/StatusBadge";
import RowActions  from "../../../component/ui/RowActions";

import { INVOICES_DATA } from "../api/invoices.api";

const STATUS_VARIANT = {
  paid:     "success",
  pending:  "warning",
  refunded: "info",
};

export default function InvoicesTable() {
  const { t }               = useTranslation("invoices");
  const [search, setSearch] = useState("");

  const allRows = INVOICES_DATA.map((r) => ({
    ...r,
    payment:   t(`payment.${r.paymentKey}`),
    amountFmt: `${r.amount.toLocaleString()} ${t("currency")}`,
  }));

  const rows = allRows.filter((r) =>
    [r.invoiceNo, r.patient, r.payment].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    { key: "id",        label: t("table.id"),        width: "55px"  },
    { key: "invoiceNo", label: t("table.invoiceNo"), width: "120px" },
    { key: "patient",   label: t("table.patient"),   width: "170px" },
    { key: "amountFmt", label: t("table.amount"),    width: "120px" },
    { key: "payment",   label: t("table.payment"),   width: "110px" },
    { key: "date",      label: t("table.date"),      width: "120px" },
    {
      key: "status",
      label: t("table.status"),
      width: "120px",
      render: (val) => (
        <StatusBadge
          status={val}
          variant={STATUS_VARIANT[val]}
          namespace="invoices"
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