// ✅ بيانات ثابتة دلوقتي — لما API تجهز بس استبدل بـ axios.get()
export const STAFF_DATA = [
  { id: 1, name: "أحمد المالكي",       roleKey: "sysAdmin",     deptKey: "admin",      phone: "0551001001", status: "active" },
  { id: 2, name: "ماي الحربي",         roleKey: "nurse",        deptKey: "cardiology", phone: "0552002002", status: "active" },
  { id: 3, name: "سعد الغامدي",        roleKey: "labTech",      deptKey: "lab",        phone: "0553003003", status: "active" },
  { id: 4, name: "نورة العنيزي",       roleKey: "receptionist", deptKey: "reception",  phone: "0554004004", status: "active" },
  { id: 5, name: "عبدالعزيز الشهري",   roleKey: "pharmacist",   deptKey: "pharmacy",   phone: "0555005005", status: "active" },
  { id: 6, name: "ريم القحطاني",       roleKey: "accountant",   deptKey: "finance",    phone: "0556006006", status: "leave"  },
  { id: 7, name: "فيصل الدوسري",       roleKey: "radiologist",  deptKey: "radiology",  phone: "0557007007", status: "active" },
  { id: 8, name: "عائشة المطيري",      roleKey: "nurse",        deptKey: "emergency",  phone: "0558008008", status: "active" },
];


// ============================================================
//  employeeData.js — Mock data + all shared constants/options
// ============================================================

// ── Badge Variants ──────────────────────────────────────────
// Add / remove entries here; every component reads from this map
export const BADGE_VARIANTS = {
  // Employment status
  نشط:     { cls: "badge-success" },
  موقوف:   { cls: "badge-warning" },
  منتهي:   { cls: "badge-danger"  },
  إجازة:   { cls: "badge-info"    },

  // Roles
  ممرض:    { cls: "badge-role"    },
  طبيب:    { cls: "badge-purple"  },
  إداري:   { cls: "badge-neutral" },
  صيدلاني: { cls: "badge-coral"   },
  فني:     { cls: "badge-info"    },

  // Leave status
  مقبول:   { cls: "badge-success" },
  مرفوض:   { cls: "badge-danger"  },
  معلق:    { cls: "badge-warning" },

  // Default fallback
  _default: { cls: "badge-neutral" },
};

// ── Dropdown / Select Options ────────────────────────────────
export const DEPARTMENTS = [
  "الطوارئ", "الجراحة", "الباطنية", "الأطفال",
  "النساء والولادة", "العناية المركزة", "العيادات الخارجية",
];

export const SHIFTS = ["صباحي", "مسائي", "ليلي", "كامل اليوم"];

export const ROLES = ["ممرض", "طبيب", "إداري", "صيدلاني", "فني"];

export const EMPLOYEE_STATUSES = ["نشط", "موقوف", "منتهي", "إجازة"];

export const LEAVE_TYPES = ["سنوية", "مرضية", "طارئة", "أمومة", "بدون راتب"];

export const LEAVE_STATUSES = ["مقبول", "مرفوض", "معلق"];

// ── Mock Employee ────────────────────────────────────────────
export const EMPLOYEE = {
  id: 1,
  personal: {
    name:       "أ. سعد الشمري",
    role:       "ممرض",
    phone:      "0551001001",
    email:      "saad@hms.sa",
    nationalId: "1089000001",
    education:  "بكالوريوس تمريض",
  },
  job: {
    department:   "الطوارئ",
    joinDate:     "2020-03-15",
    shift:        "صباحي",
    supervisor:   "د. عبدالرحمن الشمري",
    status:       "نشط",
  },
  leaves: [
    {
      id: 1,
      type:      "سنوية",
      from:      "2026-05-01",
      to:        "2026-05-10",
      days:      10,
      status:    "مقبول",
    },
  ],
};