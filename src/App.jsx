import React                                        from "react";
import { BrowserRouter, Routes, Route, Navigate }  from "react-router-dom";
import { ThemeProvider }                            from "./core/ThemeContext";
import MainLayout                                   from "./layout/MainLayout";
import Login                                        from "./modules/Auth/page/Login";
import Dashboard                                    from "./modules/Dashboard/page/Dashboard";
import Employees from "./modules/employees/page/employees";
import Doctors from "./modules/Doctors/page/Doctors";
import Patients from "./modules/Patients/page/Patients";
import Appointments from "./modules/Appointments/page/Appointments";
import Invoices from "./modules/Billing & Invoices/page/Invoices";
import Insurance from "./modules/Insurance/page/Insurance";
import Departments from "./modules/Departments/page/Departments";
import Rooms from "./modules/Rooms/page/Rooms";
import Buildings from "./modules/Buildings/page/Buildings";



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
            <Route path="/"          element={<Navigate replace to="/home" />} />
            <Route path="/home"      element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/doctors"   element={<Doctors />} />
            <Route path="/patients"  element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/invoices"   element={<Invoices />} />
            <Route path="/insurance"  element={<Insurance />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/rooms"      element={<Rooms />} />
            <Route path="/buildings"  element={<Buildings />} />
          </Route>

          {/* ── Fallback ─────────────────────── */}
          <Route path="*" element={<Navigate replace to="/login" />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}