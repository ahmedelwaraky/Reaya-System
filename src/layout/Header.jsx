import { useTranslation } from "react-i18next";
import { useTheme } from "../core/ThemeContext";
import { Sun, Moon, Globe, Bell, Search, LogOut } from "lucide-react";

/* ─────────────────────────────────────────────
   زر أيقونة مشترك
───────────────────────────────────────────── */
function IconBtn({ children, onClick, active = false, badge = 0, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      className={[
        "relative w-9 h-9 rounded-[10px] flex items-center justify-center",
        "flex-shrink-0 cursor-pointer transition-all duration-150",
        "border hover:text-[var(--c-icon-hov)] hover:border-[var(--c-accent)]",
        active
          ? "border-[var(--c-accent)] bg-[rgba(31,126,173,0.12)] text-[var(--c-accent)]"
          : "border-[var(--c-border)] bg-[var(--c-btn-bg)] text-[var(--c-icon)]",
      ].join(" ")}
    >
      {children}

      {badge > 0 && (
        <span
          className="absolute -top-1 -right-1 bg-red-500 text-white
                     text-[10px] font-bold rounded-full min-w-[16px] h-4
                     flex items-center justify-center px-0.5 pointer-events-none"
        >
          {badge}
        </span>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Header
───────────────────────────────────────────── */
export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const toggleLang = () => i18n.changeLanguage(isRtl ? "en" : "ar");

  return (
    <header
      className="flex items-center gap-3 px-4 h-14 flex-shrink-0
                 bg-[var(--c-bg)] border-b border-[var(--c-border)]"
    >
      {/* ── Search ─────────────────────────── */}
      <div
        className={[
          "flex items-center gap-2 px-3 h-9 w-52 rounded-[10px]",
          "bg-[var(--c-btn-bg)] border border-[var(--c-border)]",
          isRtl ? "flex-row-reverse" : "",
        ].join(" ")}
      >
        <Search size={15} className="text-[var(--c-icon)] flex-shrink-0" />
        <input
          placeholder={t("search_placeholder")}
          dir={isRtl ? "rtl" : "ltr"}
          className={[
            "bg-transparent border-none outline-none flex-1 text-[13px]",
            "text-[var(--c-text)] placeholder:text-[var(--c-sub)]",
            isRtl ? "text-right" : "text-left",
          ].join(" ")}
        />
      </div>

      {/* ── Spacer ──────────────────────────── */}
      <div className="flex-1" />

      {/* ── Action buttons ──────────────────── */}
      <div className="flex items-center gap-2">
        <IconBtn
          onClick={toggleTheme}
          active={isDark}
          title={t("actions.toggle_theme")}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </IconBtn>

        <IconBtn onClick={toggleLang} title={t("actions.toggle_lang")}>
          <Globe size={16} />
        </IconBtn>

        <IconBtn badge={3} title={t("actions.notifications")}>
          <Bell size={16} />
        </IconBtn>
      </div>

      {/* ── User section ────────────────────── */}
      <div
        className={[
          "flex items-center gap-2.5 flex-shrink-0",
          "ps-3 border-s border-[var(--c-border)]",
          isRtl ? "flex-row-reverse" : "",
        ].join(" ")}
      >
        {/* Avatar */}
        <div
          className="w-[34px] h-[34px] rounded-full flex-shrink-0
                     bg-[var(--c-accent)] text-white font-bold text-sm
                     flex items-center justify-center select-none"
        >
          {t("user.initials")}
        </div>

        {/* Name & Role */}
        <div className={`flex flex-col leading-tight ${isRtl ? "text-right" : "text-left"}`}>
          <span className="text-[13px] font-semibold text-[var(--c-text)] whitespace-nowrap">
            {t("user.name")}
          </span>
          <span className="text-[11px] text-[var(--c-sub)] whitespace-nowrap">
            {t("user.role")}
          </span>
        </div>

        {/* Logout */}
        <IconBtn title={t("actions.logout")}>
          <LogOut size={15} className={isRtl ? "scale-x-[-1]" : ""} />
        </IconBtn>
      </div>
    </header>
  );
}