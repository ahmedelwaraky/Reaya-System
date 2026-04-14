import { useState }       from "react";
import { Outlet }         from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider }  from "../core/ThemeContext";
import Header             from "./Header";
import Sidebar            from "./Sidebar";

function Layout() {
  const { i18n }                    = useTranslation();
  const dir                         = i18n.language === "ar" ? "rtl" : "ltr";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      dir={dir}
      className="flex h-screen overflow-hidden bg-[var(--c-surface)] text-[var(--c-text)] transition-colors duration-300"
    >
      {/* ── Overlay mobile ───────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Sidebar ──────────────────────────── */}
      <div
        className={[
          "fixed inset-y-0 z-30",
          "lg:static lg:z-auto lg:translate-x-0",
          "transition-transform duration-300 ease-in-out",
          dir === "rtl"
            ? mobileOpen ? "translate-x-0 right-0" : "translate-x-full right-0"
            : mobileOpen ? "translate-x-0 left-0"  : "-translate-x-full left-0",
        ].join(" ")}
      >
        <Sidebar onClose={() => setMobileOpen(false)} />
      </div>

      {/* ── Content ──────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[var(--c-surface)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function MainLayout() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}