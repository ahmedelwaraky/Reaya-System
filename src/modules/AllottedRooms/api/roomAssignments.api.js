// ✅ Static data — replace with axios.get() when API is ready

export const ASSIGNMENTS_DATA = [
  { id: 1,  room: "101", floor: "الأول",  typeKey: "private",  patient: "محمد العمري",    doctor: "د. سارة القحطاني", admitDate: "2025-04-10", status: "occupied"    },
  { id: 2,  room: "102", floor: "الأول",  typeKey: "shared",   patient: "أحمد الدوسري",   doctor: "د. خالد المطيري",  admitDate: "2025-04-08", status: "occupied"    },
  { id: 3,  room: "201", floor: "الثاني", typeKey: "vip",      patient: "فهد الحربي",     doctor: "د. نورة العنزي",   admitDate: "2025-04-12", status: "occupied"    },
  { id: 4,  room: "203", floor: "الثاني", typeKey: "private",  patient: "هند المالكي",    doctor: "د. عمر الشهري",    admitDate: "2025-04-11", status: "occupied"    },
  { id: 5,  room: "305", floor: "الثالث", typeKey: "icu",      patient: "يوسف الغامدي",   doctor: "د. سارة القحطاني", admitDate: "2025-04-09", status: "critical"    },
  { id: 6,  room: "108", floor: "الأول",  typeKey: "shared",   patient: null,             doctor: null,               admitDate: null,         status: "available"   },
  { id: 7,  room: "304", floor: "الثالث", typeKey: "private",  patient: null,             doctor: null,               admitDate: null,         status: "maintenance" },
  { id: 8,  room: "205", floor: "الثاني", typeKey: "shared",   patient: "سلمان القرني",   doctor: "د. خالد المطيري",  admitDate: "2025-04-13", status: "occupied"    },
];

/* ── Room map data ───────────────────────── */
export const ROOM_MAP = [
  { id: "r205", name: "205", typeKey: "shared",  status: "occupied"    },
  { id: "r304", name: "304", typeKey: "private", status: "maintenance" },
  { id: "r108", name: "108", typeKey: "shared",  status: "available"   },
  { id: "r305", name: "305", typeKey: "icu",     status: "critical"    },
  { id: "r203", name: "203", typeKey: "private", status: "occupied"    },
  { id: "r201", name: "201", typeKey: "vip",     status: "occupied"    },
  { id: "r102", name: "102", typeKey: "shared",  status: "occupied"    },
  { id: "r101", name: "101", typeKey: "private", status: "occupied"    },
];