import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ar from "./locales/ar/translation.json";
import en from "./locales/en/translation.json";

import arDashboard from "./locales/ar/dashboard.json"; // ✅
import enDashboard from "./locales/en/dashboard.json"; // ✅

import arStaff from "./locales/ar/staff.json"; // ✅
import enStaff from "./locales/en/staff.json"; // ✅

import arAuth from "./locales/ar/auth.json"; // ✅
import enAuth from "./locales/en/auth.json"; // ✅

import arDoctors from "./locales/ar/doctors.json"; // ✅
import enDoctors from "./locales/en/doctors.json"; // ✅

import arPatients from "./locales/ar/patients.json";
import enPatients from "./locales/en/patients.json";

import arAppointments from "./locales/ar/appointments.json";
import enAppointments from "./locales/en/appointments.json";

import arInvoices from "./locales/ar/invoices.json";
import enInvoices from "./locales/en/invoices.json";

import arInsurance from "./locales/ar/insurance.json";
import enInsurance from "./locales/en/insurance.json";

import arDepartments from "./locales/ar/departments.json";
import enDepartments from "./locales/en/departments.json";

import arRooms from "./locales/ar/rooms.json";
import enRooms from "./locales/en/rooms.json";

import arRoomAssignments from "./locales/ar/roomAssignments.json";
import enRoomAssignments from "./locales/en/roomAssignments.json";

import arFloors from "./locales/ar/floors.json";
import enFloors from "./locales/en/floors.json";

import arBuildings from "./locales/ar/buildings.json";
import enBuildings from "./locales/en/buildings.json";

import arDiagnoses from "./locales/ar/diagnoses.json";
import enDiagnoses from "./locales/en/diagnoses.json";

import arCare from "./locales/ar/care.json";
import enCare from "./locales/en/care.json";

import arPrescriptions from "./locales/ar/prescriptions.json";
import enPrescriptions from "./locales/en/prescriptions.json";

import arReports from "./locales/ar/reports.json";
import enReports from "./locales/en/reports.json";

import arRevenue from "./locales/ar/revenue.json";
import enRevenue from "./locales/en/revenue.json";

import arLeaves from "./locales/ar/leaves.json";
import enLeaves from "./locales/en/leaves.json";

import arOrganization from "./locales/ar/organization.json";
import enOrganization from "./locales/en/organization.json";

import arGeography from "./locales/ar/geography.json";
import enGeography from "./locales/en/geography.json";

import arSettings from "./locales/ar/settings.json";
import enSettings from "./locales/en/settings.json";

const applyDir = (lang) => {
  const l = lang?.split("-")[0] ?? "ar";
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = l;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: ar,
        dashboard: arDashboard, // ✅
        staff: arStaff, // ✅
        auth: arAuth, // ✅
        doctors: arDoctors, // ✅
        patients: arPatients, // ✅
        appointments: arAppointments, // ✅
        invoices: arInvoices, // ✅
        insurance: arInsurance, // ✅
        departments: arDepartments, // ✅
        rooms: arRooms, // ✅
        buildings: arBuildings, // ✅
        diagnoses: arDiagnoses, // ✅
        care: arCare, // ✅
        prescriptions: arPrescriptions, // ✅
        reports: arReports, // ✅
        revenue: arRevenue, // ✅
        leaves: arLeaves, // ✅
        organization: arOrganization, // ✅
        geography: arGeography, // ✅
        roomAssignments: arRoomAssignments,
        settings: arSettings,
        floors: arFloors 
      },
      en: {
        translation: en,
        dashboard: enDashboard, // ✅
        staff: enStaff, // ✅
        auth: enAuth, // ✅
        doctors: enDoctors, // ✅
        patients: enPatients, // ✅
        appointments: enAppointments, // ✅
        invoices: enInvoices, // ✅
        insurance: enInsurance, // ✅
        departments: enDepartments, // ✅
        rooms: enRooms, // ✅
        buildings: enBuildings, // ✅
        diagnoses: enDiagnoses, // ✅
        care: enCare, // ✅
        prescriptions: enPrescriptions, // ✅
        reports: enReports, // ✅
        revenue: enRevenue, // ✅
        leaves: enLeaves, // ✅
        organization: enOrganization, // ✅
        geography: enGeography, // ✅
        roomAssignments: enRoomAssignments,
        settings: enSettings,
         floors: enFloors 
      },
    },
    fallbackLng: "ar",
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })
  .then(() => applyDir(i18n.language));

i18n.on("languageChanged", applyDir);

export default i18n;
