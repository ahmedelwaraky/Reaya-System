import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  UserCheck,
  Calendar,
  Receipt,
  Shield,
  Building2,
  Hotel,
  Building,
  FlaskConical,
  HeartPulse,
  Pill,
  BarChart2,
  DollarSign,
  CalendarOff,
  Landmark,
  Globe,
  ChevronLeft,
  ChevronRight,
  Hospital,
  X,
  Settings,
} from "lucide-react";
import logo from "../assets/images/icon1.png";
const NAV_ITEMS = [
  { key: "dashboard", icon: LayoutDashboard, path: "/home" },
  { key: "employees", icon: Users, path: "/employees" },
  { key: "doctors", icon: Stethoscope, path: "/doctors" },
  { key: "patients", icon: UserCheck, path: "/patients" },
  { key: "appointments", icon: Calendar, path: "/appointments" },
  { key: "invoices", icon: Receipt, path: "/invoices" },
  { key: "insurance", icon: Shield, path: "/insurance" },
  { key: "departments", icon: Building2, path: "/departments" },
  { key: "rooms", icon: Hotel, path: "/rooms" },
  { key: "allotted-rooms", icon: Hotel, path: "/room-assignments" },
  { key: "floors", icon: Building, path: "/floors" },
  { key: "buildings", icon: Building, path: "/buildings" },
  { key: "diagnoses", icon: FlaskConical, path: "/diagnoses" },
  { key: "care", icon: HeartPulse, path: "/care" },
  { key: "prescriptions", icon: Pill, path: "/prescriptions" },
  { key: "reports", icon: BarChart2, path: "/reports" },
  { key: "revenue", icon: DollarSign, path: "/revenue" },
  { key: "leaves", icon: CalendarOff, path: "/leaves" },
  { key: "organization", icon: Landmark, path: "/organization" },
  { key: "geography", icon: Globe, path: "/geography" },
  { key: "settings", icon: Settings, path: "/settings" },
];

export default function Sidebar({ onClose }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [collapsed, setCollapsed] = useState(false);

  const CollapseIcon = isRtl
    ? collapsed
      ? ChevronLeft
      : ChevronRight
    : collapsed
      ? ChevronRight
      : ChevronLeft;

  return (
    <aside
      className={[
        "flex flex-col h-full overflow-y-auto overflow-x-hidden flex-shrink-0",
        "bg-[var(--c-bg)] transition-[width] duration-300 ease-in-out",
        isRtl
          ? "border-l border-[var(--c-border)]"
          : "border-r border-[var(--c-border)]",
        // mobile: عرض ثابت — desktop: collapsible
        collapsed ? "w-[260px] lg:w-16" : "w-[260px]",
      ].join(" ")}
    >
      {/* ── Logo ─────────────────────────────── */}
      <div
        className={[
          "flex items-center px-3.5 py-[18px]",
          "border-b border-[var(--c-border)] flex-shrink-0",
          "justify-between",
          isRtl ? "flex-row-reverse" : "flex-row",
        ].join(" ")}
      >
        {/* Logo + Name */}

        <div
          className={[
            "flex items-center gap-2.5",
            isRtl ? "flex-row-reverse ml-auto" : "flex-row",
          ].join(" ")}
        >
          {isRtl ? (
            <>
              <span
                className={[
                  "text-[var(--c-accent)] font-bold text-lg leading-tight whitespace-nowrap",
                  collapsed ? "lg:hidden" : "",
                ].join(" ")}
              >
                {t("hospital_name")}
              </span>

              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span
                className={[
                  "text-[var(--c-accent)] font-bold text-lg leading-tight whitespace-nowrap",
                  collapsed ? "lg:hidden" : "",
                ].join(" ")}
              >
                {t("hospital_name")}
              </span>
            </>
          )}
        </div>

        {/* زر X */}
        <button
          onClick={onClose}
          className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center
               text-[var(--c-icon)] hover:bg-[var(--c-hov-bg)]
               hover:text-[var(--c-accent)] transition-colors duration-150"
        >
          <X size={17} />
        </button>
      </div>

      {/* ── Nav ──────────────────────────────── */}
      <nav className="flex-1 py-2.5 overflow-y-auto overflow-x-hidden">
        {NAV_ITEMS.map(({ key, icon: Icon, path }) => (
          <NavLink
            key={key}
            to={path}
            title={collapsed ? t(`nav.${key}`) : undefined}
            onClick={onClose} // ✅ يقفل الـ sidebar على موبايل بعد النقر
            className={({ isActive }) =>
              [
                "group flex items-center w-full my-0.5 px-3.5 py-2.5",
                "text-[15px] font-semibold transition-colors duration-150 no-underline",
                collapsed ? "lg:justify-center" : "",
                isActive
                  ? "bg-[var(--c-active-item)] text-[var(--c-active-tx)] font-semibold"
                  : "text-[var(--c-text)] hover:bg-[var(--c-hov-bg)] hover:text-[var(--c-hov-tx)]",
              ].join(" ")
            }
            style={
              !collapsed
                ? {
                    flexDirection: isRtl ? "row-reverse" : "row",
                    justifyContent: isRtl ? "flex-end" : "flex-start",
                  }
                : {}
            }
          >
            {({ isActive }) =>
              isRtl ? (
                <>
                  {!collapsed && (
                    <span
                      className={[
                        "whitespace-nowrap truncate transition-colors duration-150",
                        isActive ? "" : "group-hover:text-[var(--c-accent)]",
                      ].join(" ")}
                      style={{ paddingRight: "8px" }}
                    >
                      {t(`nav.${key}`)}
                    </span>
                  )}
                  <Icon
                    size={21}
                    className={[
                      "flex-shrink-0 transition-colors duration-150",
                      isActive
                        ? "text-[var(--c-accent)]"
                        : "text-[var(--c-icon)] group-hover:text-[var(--c-accent)]",
                    ].join(" ")}
                  />
                </>
              ) : (
                <>
                  <Icon
                    size={18}
                    className={[
                      "flex-shrink-0 transition-colors duration-150",
                      isActive
                        ? "text-[var(--c-accent)]"
                        : "text-[var(--c-icon)] group-hover:text-[var(--c-accent)]",
                    ].join(" ")}
                  />
                  {!collapsed && (
                    <span
                      className={[
                        "whitespace-nowrap truncate transition-colors duration-150",
                        isActive ? "" : "group-hover:text-[var(--c-accent)]",
                      ].join(" ")}
                      style={{ paddingLeft: "8px" }}
                    >
                      {t(`nav.${key}`)}
                    </span>
                  )}
                </>
              )
            }
          </NavLink>
        ))}
      </nav>

      {/* ── Collapse toggle (desktop only) ───── */}
      <button
        onClick={() => setCollapsed((p) => !p)}
        title={t(collapsed ? "actions.expand" : "actions.collapse")}
        aria-label={t(collapsed ? "actions.expand" : "actions.collapse")}
        className="hidden lg:flex items-center justify-center p-3.5 w-full flex-shrink-0
                   border-t border-[var(--c-border)] bg-transparent cursor-pointer
                   text-[var(--c-icon)] hover:text-[var(--c-icon-hov)]
                   transition-colors duration-150"
      >
        <CollapseIcon size={18} />
      </button>
    </aside>
  );
}
