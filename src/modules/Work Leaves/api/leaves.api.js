// ✅ Static data — replace with axios.get() when API is ready
export const LEAVES_DATA = [
  { id: 1,  staff: "د. منال العنزي",    typeKey: "annual",    from: "2026-04-15", to: "2026-04-25", days: 10, status: "approved"  },
  { id: 2,  staff: "ريم القحطاني",      typeKey: "sick",      from: "2026-04-10", to: "2026-04-12", days: 2,  status: "approved"  },
  { id: 3,  staff: "سعد الغامدي",       typeKey: "emergency", from: "2026-04-11", to: "2026-04-11", days: 1,  status: "pending"   },
  { id: 4,  staff: "منى الحربي",        typeKey: "annual",    from: "2026-05-01", to: "2026-05-15", days: 14, status: "pending"   },
  { id: 5,  staff: "د. خالد المطيري",   typeKey: "conference",from: "2026-04-20", to: "2026-04-22", days: 2,  status: "approved"  },
  { id: 6,  staff: "فيصل الدوسري",      typeKey: "sick",      from: "2026-04-08", to: "2026-04-09", days: 1,  status: "approved"  },
  { id: 7,  staff: "عائشة المطيري",     typeKey: "annual",    from: "2026-06-01", to: "2026-06-10", days: 9,  status: "rejected"  },
  { id: 8,  staff: "أحمد الشهري",       typeKey: "emergency", from: "2026-04-05", to: "2026-04-06", days: 2,  status: "approved"  },
  { id: 9,  staff: "نورة العتيبي",      typeKey: "conference",from: "2026-05-10", to: "2026-05-12", days: 2,  status: "pending"   },
  { id: 10, staff: "خالد الرشيدي",      typeKey: "sick",      from: "2026-04-14", to: "2026-04-15", days: 1,  status: "rejected"  },
  { id: 11, staff: "سارة القحطاني",     typeKey: "annual",    from: "2026-07-01", to: "2026-07-14", days: 13, status: "approved"  },
  { id: 12, staff: "عمر الحربي",        typeKey: "emergency", from: "2026-04-18", to: "2026-04-18", days: 1,  status: "pending"   },
];

/* ── Monthly stacked bar data ────────────── */
export const MONTHLY_LEAVES = [
  { name: "يناير",  annual: 3, sick: 2, emergency: 1, conference: 0 },
  { name: "فبراير", annual: 4, sick: 2, emergency: 1, conference: 1 },
  { name: "مارس",   annual: 2, sick: 2, emergency: 1, conference: 1 },
  { name: "أبريل",  annual: 5, sick: 3, emergency: 2, conference: 2 },
  { name: "مايو",   annual: 6, sick: 2, emergency: 1, conference: 0 },
  { name: "يونيو",  annual: 3, sick: 2, emergency: 1, conference: 1 },
];

/* ── Leaves by type (donut) ──────────────── */
export const LEAVES_BY_TYPE = [
  { name: "سنوية (22)",    value: 22 },
  { name: "مرضية (12)",    value: 12 },
  { name: "طارئة (6)",     value: 6  },
  { name: "مؤتمر (5)",     value: 5  },
];