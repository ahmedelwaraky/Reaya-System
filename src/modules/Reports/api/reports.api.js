// ✅ Static data — replace with axios.get() when API is ready

/* ── Saved Reports ───────────────────────── */
export const SAVED_REPORTS = [
  { id: 1,  nameKey: "monthlyPatients",  date: "2026-04-01", format: "PDF",   module: "patients"       },
  { id: 2,  nameKey: "q1Revenue",        date: "2026-04-01", format: "Excel", module: "revenue"        },
  { id: 3,  nameKey: "doctorsPerf",      date: "2026-03-30", format: "PDF",   module: "doctors"        },
  { id: 4,  nameKey: "q1Insurance",      date: "2026-03-28", format: "PDF",   module: "insurance"      },
  { id: 5,  nameKey: "roomsOccupancy",   date: "2026-03-25", format: "Excel", module: "rooms"          },
  { id: 6,  nameKey: "employeesLeave",   date: "2026-03-20", format: "PDF",   module: "employees"      },
  { id: 7,  nameKey: "prescriptions",    date: "2026-03-18", format: "Excel", module: "prescriptions"  },
  { id: 8,  nameKey: "diagnosesStats",   date: "2026-03-15", format: "PDF",   module: "diagnoses"      },
  { id: 9,  nameKey: "careServices",     date: "2026-03-10", format: "Excel", module: "care"           },
  { id: 10, nameKey: "buildingsUsage",   date: "2026-03-05", format: "PDF",   module: "buildings"      },
  { id: 11, nameKey: "appointmentsStat", date: "2026-03-01", format: "Excel", module: "appointments"   },
  { id: 12, nameKey: "invoicesSummary",  date: "2026-02-28", format: "PDF",   module: "invoices"       },
];

/* ── Monthly Revenue ─────────────────────── */
export const MONTHLY_REVENUE = [
  { name: "يناير",  value: 195000 },
  { name: "فبراير", value: 210000 },
  { name: "مارس",   value: 198000 },
  { name: "أبريل",  value: 255000 },
  { name: "مايو",   value: 232000 },
  { name: "يوليو",  value: 262000 },
];

/* ── Patients by Department ──────────────── */
export const PATIENTS_BY_DEPT = [
  { name: "القلب",     value: 310 },
  { name: "العظام",    value: 280 },
  { name: "الأطفال",   value: 175 },
  { name: "الأعصاب",   value: 160 },
  { name: "الطوارئ",   value: 420 },
  { name: "الجلدية",   value: 95  },
];

/* ── Insurance Distribution ──────────────── */
export const INSURANCE_DIST = [
  { name: "بدون (35%)",    value: 35 },
  { name: "تعاونية (28%)", value: 28 },
  { name: "مدفوع (20%)",   value: 20 },
  { name: "نقدي (17%)",    value: 17 },
];

/* ── Employees by Department ─────────────── */
export const EMPLOYEES_BY_DEPT = [
  { name: "الطوارئ",   value: 20 },
  { name: "الإدارة",   value: 22 },
  { name: "القلب",     value: 18 },
  { name: "الأطفال",   value: 14 },
  { name: "المختبر",   value: 12 },
];

/* ── Diagnoses by Category ───────────────── */
export const DIAGNOSES_BY_CAT = [
  { name: "مختبر",  value: 55 },
  { name: "أشعة",   value: 30 },
  { name: "قلب",    value: 15 },
];

/* ── Appointments per Month ──────────────── */
export const APPOINTMENTS_MONTHLY = [
  { name: "يناير",  value: 320, value2: 45 },
  { name: "فبراير", value: 345, value2: 38 },
  { name: "مارس",   value: 380, value2: 52 },
  { name: "أبريل",  value: 410, value2: 41 },
  { name: "مايو",   value: 390, value2: 36 },
  { name: "يوليو",  value: 425, value2: 48 },
];

/* ── Rooms Occupancy ─────────────────────── */
export const ROOMS_OCCUPANCY = [
  { name: "القلب",   value: 85 },
  { name: "الطوارئ", value: 92 },
  { name: "الأطفال", value: 70 },
  { name: "الجراحة", value: 78 },
  { name: "الباطنة", value: 65 },
];

/* ── Prescriptions Monthly ───────────────── */
export const PRESCRIPTIONS_MONTHLY = [
  { name: "يناير",  value: 110 },
  { name: "فبراير", value: 125 },
  { name: "مارس",   value: 132 },
  { name: "أبريل",  value: 128 },
  { name: "مايو",   value: 158 },
  { name: "يوليو",  value: 152 },
];

/* ── Buildings Floors ────────────────────── */
export const BUILDINGS_FLOORS = [
  { name: "الرئيسي",  value: 8 },
  { name: "العيادات", value: 5 },
  { name: "الإداري",  value: 4 },
  { name: "الجراحة",  value: 4 },
  { name: "الطوارئ",  value: 3 },
];