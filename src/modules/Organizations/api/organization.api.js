// ✅ Static data — replace with axios.get() when API is ready

export const ORG_INFO = {
  nameAr:     "مجموعة الرعاية الطبية المتقدمة",
  nameEn:     "Advanced Medical Care Group",
  licenseNo:  "MOH-2020-12345",
  ceo:        "أحمد بن محمد المالكي",
  founded:    "2015",
  type:       "مستشفى خاص",
  taxNo:      "300123456700003",
  crNo:       "1010123456",
  accreditation: "JCI & CBAHI معتمد",
};

export const ORG_CONTACT = {
  address: "الرياض، حي الملقا، طريق الأمير محمد بن سلمان",
  phone:   "+966 11 234 5678",
  fax:     "+966 11 234 5679",
  email:   "info@amcg.sa",
  website: "www.amcg.sa",
  poBox:   "12345",
  city:    "الرياض",
  country: "المملكة العربية السعودية",
};

export const ORG_STATS = {
  employees:   342,
  branches:    3,
  departments: 26,
  beds:        180,
  doctors:     49,
  patients:    1247,
};

export const ORG_BRANCHES = [
  { id: 1, name: "الفرع الرئيسي – الرياض", employees: 180, departments: 12, beds: 95,  status: "active" },
  { id: 2, name: "فرع جدة",                employees: 95,  departments: 8,  beds: 52,  status: "active" },
  { id: 3, name: "فرع النمام",             employees: 67,  departments: 6,  beds: 33,  status: "active" },
];

export const ORG_MANAGEMENT = [
  { id: 1, name: "أحمد بن محمد المالكي",  role: "المدير التنفيذي",       since: "2015" },
  { id: 2, name: "د. سارة القحطاني",      role: "المدير الطبي",          since: "2017" },
  { id: 3, name: "خالد الرشيدي",          role: "مدير العمليات",         since: "2018" },
  { id: 4, name: "ريم الشهري",            role: "مدير الموارد البشرية",  since: "2019" },
  { id: 5, name: "فهد الدوسري",           role: "المدير المالي",         since: "2020" },
];

export const ORG_CERTIFICATIONS = [
  { id: 1, name: "JCI Accreditation",      issuer: "Joint Commission International", year: "2021", status: "active" },
  { id: 2, name: "CBAHI Accreditation",    issuer: "Saudi Central Board",            year: "2022", status: "active" },
  { id: 3, name: "ISO 9001:2015",          issuer: "Bureau Veritas",                 year: "2020", status: "active" },
  { id: 4, name: "HIMSS Level 6",          issuer: "HIMSS Analytics",                year: "2023", status: "active" },
];