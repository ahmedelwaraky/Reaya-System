import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ar          from "./locales/ar/translation.json";
import en          from "./locales/en/translation.json";
import arDashboard from "./locales/ar/dashboard.json";   // ✅
import enDashboard from "./locales/en/dashboard.json";   // ✅
import arEmployees from "./locales/ar/employees.json";   // ✅
import enEmployees  from "./locales/en/employees.json";   // ✅

import arAuth  from "./locales/ar/auth.json";   // ✅
import enAuth   from "./locales/en/auth.json";   // ✅

import arDoctors   from "./locales/ar/doctors.json";   // ✅
import enDoctors   from "./locales/en/doctors.json";   // ✅

import arPatients from "./locales/ar/patients.json";
import enPatients from "./locales/en/patients.json";
import arAppointments from "./locales/ar/appointments.json";
import enAppointments from "./locales/en/appointments.json";


const applyDir = (lang) => {
  const l = lang?.split("-")[0] ?? "ar";
  document.documentElement.dir  = l === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = l;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: ar,
        dashboard:   arDashboard,   // ✅
        employees:   arEmployees,   // ✅
        auth:   arAuth,   // ✅
        doctors:   arDoctors,   // ✅
        patients:  arPatients,  // ✅
        appointments: arAppointments, // ✅
      },
      en: {
        translation: en,
        dashboard:   enDashboard,   // ✅
        employees:   enEmployees,   // ✅
        auth:   enAuth,   // ✅
        doctors:   enDoctors,   // ✅
        patients:  enPatients,  // ✅
        appointments: enAppointments, // ✅
      },
    },
    fallbackLng:   "ar",
    defaultNS:     "translation",
    interpolation: { escapeValue: false },
    detection: {
      order:  ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })
  .then(() => applyDir(i18n.language));

i18n.on("languageChanged", applyDir);

export default i18n;