import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./core/ThemeContext";
import MainLayout from "./layout/MainLayout";
import Login from "./modules/Auth/page/Login";
import Dashboard from "./modules/Dashboard/page/Dashboard";

import Staff from "./modules/Staff/page/Staff";
import Doctors from "./modules/Doctors/page/Doctors";
import Patients from "./modules/Patients/page/Patients";
import Appointments from "./modules/Appointments/page/Appointments";
import Invoices from "./modules/Billing-Invoices/page/Invoices";
import Insurance from "./modules/Insurance/page/Insurance";
import Departments from "./modules/Departments/page/Departments";
import Rooms from "./modules/Rooms/page/Rooms";
import Buildings from "./modules/Buildings/page/Buildings";
import Diagnoses from "./modules/Diagnostics/page/Diagnoses";
import Care from "./modules/Care-Services/page/Care";
import Prescriptions from "./modules/Prescriptions/page/Prescriptions";
import Reports from "./modules/Reports/page/Reports";
import Revenue from "./modules/Revenue/page/Revenue";
import Leaves from "./modules/Work-Leaves/page/Leaves";
import Organization from "./modules/Organizations/page/Organization";
import Geography from "./modules/Geography/page/Geography";
import RoomAssignments from "./modules/AllottedRooms/page/RoomAssignments";
import SettingsPage from "./modules/Settings/page/Settings";
import Floors from "./modules/Floors/page/Floors";4

/* ── Auth guard ──────────────────────────── */
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate replace to="/login" />;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* ── Public ───────────────────────── */}
          <Route path="/login" element={<Login />} />

          {/* ── Protected ────────────────────── */}
          <Route
            element={
              <PrivateRoute>
                <MainLayout />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room-assignments" element={<RoomAssignments />} />
            <Route path="/floors" element={<Floors />} />
            <Route path="/buildings" element={<Buildings />} />
            <Route path="/diagnoses" element={<Diagnoses />} />
            <Route path="/care" element={<Care />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          {/* ── Fallback ─────────────────────── */}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
