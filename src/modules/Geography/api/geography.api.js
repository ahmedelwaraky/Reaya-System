// ✅ Static data — replace with axios.get() when API is ready

export const GEO_DATA = [
  { id: 1, name: "المملكة العربية السعودية", code: "SA", cities: 15, hospitals: 3, status: "active"   },
  { id: 2, name: "الإمارات العربية المتحدة", code: "AE", cities: 7,  hospitals: 1, status: "active"   },
  { id: 3, name: "الكويت",                  code: "KW", cities: 3,  hospitals: 0, status: "soon"     },
  { id: 4, name: "البحرين",                 code: "BH", cities: 2,  hospitals: 0, status: "soon"     },
  { id: 5, name: "قطر",                     code: "QA", cities: 2,  hospitals: 0, status: "planned"  },
  { id: 6, name: "سلطنة عمان",              code: "OM", cities: 4,  hospitals: 0, status: "planned"  },
];

/* ── Cities by country (bar) ─────────────── */
export const CITIES_BY_COUNTRY = [
  { name: "السعودية",  value: 15 },
  { name: "الإمارات",  value: 7  },
  { name: "عمان",      value: 4  },
  { name: "الكويت",    value: 3  },
  { name: "قطر",       value: 2  },
  { name: "البحرين",   value: 2  },
];

/* ── Branches by region (donut) ─────────── */
export const BRANCHES_BY_REGION = [
  { name: "الرياض (5)",  value: 5 },
  { name: "جدة (3)",     value: 3 },
  { name: "الدمام (2)",  value: 2 },
  { name: "المدينة (1)", value: 1 },
  { name: "أبوظبي (2)",  value: 2 },
];