import React                                        from "react";
import { BrowserRouter, Routes, Route, Navigate }  from "react-router-dom";
import { ThemeProvider }                            from "./core/ThemeContext";
import MainLayout                                   from "./layout/MainLayout";
import Login                                        from "./modules/Auth/page/Login";
import Dashboard                                    from "./modules/Dashboard/page/Dashboard";
import Staff                                        from "./modules/Staff/page/Staff";
import Doctors from "./modules/Doctors/page/Doctors";
import Patients from "./modules/Patients/page/Patients";
import Appointments from "./modules/Appointments/page/Appointments";

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
            <Route path="/employees" element={<Staff />} />
            <Route path="/doctors"   element={<Doctors />} />
            <Route path="/patients"  element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
          </Route>

          {/* ── Fallback ─────────────────────── */}
          <Route path="*" element={<Navigate replace to="/login" />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}