// ✅ Static data — replace with axios.get() when API is ready

/* ── Stats ───────────────────────────────── */
export const REVENUE_STATS = {
  monthlyRevenue: { value: "٢٤٥,٠٠٠ ر.س", change: 15  },
  expenses:       { value: "١٥٠,٠٠٠ ر.س", change: 8   },
  netProfit:      { value: "٩٥,٠٠٠ ر.س",  change: 22  },
  collectionRate: { value: "92%",           change: 3   },
  totalInvoices:  { value: "1,240",         change: 11  },
  paid:           { value: "1,082",         change: null },
  pending:        { value: "128",           change: null },
  overdue:        { value: "30",            change: null },
};

/* ── Revenue vs Expenses (grouped bar) ────── */
export const REVENUE_VS_EXPENSES = [
  { name: "يناير",  revenue: 195000, expenses: 120000 },
  { name: "فبراير", revenue: 210000, expenses: 135000 },
  { name: "مارس",   revenue: 198000, expenses: 128000 },
  { name: "أبريل",  revenue: 255000, expenses: 148000 },
  { name: "مايو",   revenue: 242000, expenses: 140000 },
  { name: "يونيو",  revenue: 262000, expenses: 152000 },
];

/* ── Daily Revenue (area chart) ─────────── */
export const DAILY_REVENUE = [
  { name: "السبت",    value: 12000 },
  { name: "الأحد",    value: 17500 },
  { name: "الاثنين",  value: 15800 },
  { name: "الثلاثاء", value: 21000 },
  { name: "الأربعاء", value: 19500 },
  { name: "الخميس",   value: 16200 },
  { name: "الجمعة",   value: 5200  },
];

/* ── Revenue by Department ───────────────── */
export const REVENUE_BY_DEPT = [
  { name: "القلب",    value: 85000  },
  { name: "الجراحة",  value: 72000  },
  { name: "الطوارئ",  value: 48000  },
  { name: "الأسنان",  value: 35000  },
  { name: "الأطفال",  value: 28000  },
  { name: "الباطنة",  value: 22000  },
];

/* ── Payment Methods distribution ─────────── */
export const PAYMENT_METHODS = [
  { name: "تأمين",   value: 48 },
  { name: "بطاقة",   value: 30 },
  { name: "نقدي",    value: 15 },
  { name: "تحويل",   value: 7  },
];

/* ── Monthly Net Profit trend ────────────── */
export const NET_PROFIT_TREND = [
  { name: "يناير",  value: 75000  },
  { name: "فبراير", value: 75000  },
  { name: "مارس",   value: 70000  },
  { name: "أبريل",  value: 107000 },
  { name: "مايو",   value: 102000 },
  { name: "يونيو",  value: 110000 },
];

/* ── Top Paying Patients ─────────────────── */
export const TOP_PATIENTS = [
  { id: 1, name: "محمد العمري",    total: 12500, invoices: 4, status: "paid"    },
  { id: 2, name: "نورة الشهري",   total: 9800,  invoices: 3, status: "paid"    },
  { id: 3, name: "خالد القحطاني", total: 8400,  invoices: 2, status: "pending" },
  { id: 4, name: "فاطمة الزهراني",total: 7600,  invoices: 5, status: "paid"    },
  { id: 5, name: "عبدالله الشمري",total: 6200,  invoices: 2, status: "overdue" },
];