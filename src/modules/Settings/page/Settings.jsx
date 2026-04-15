import { useState }       from "react";
import { useTranslation } from "react-i18next";
import {
  Settings, Building2, Globe, Bell,
  Shield, Palette, Database,
  ChevronDown, ChevronUp, Save,
} from "lucide-react";

/* ── Reusable Input ──────────────────────── */
function Field({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-6 py-2">
      <span className="text-[13px] text-[var(--c-sub)] whitespace-nowrap flex-shrink-0 w-36 text-end">
        {label}
      </span>
      <div className="flex-1 max-w-[320px]">{children}</div>
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-9 px-3 rounded-[10px] text-[13px] text-center
                 bg-[var(--c-btn-bg)] border border-[var(--c-border)]
                 text-[var(--c-text)] placeholder:text-[var(--c-sub)]
                 outline-none focus:border-[var(--c-accent)] transition-colors"
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full h-9 px-3 rounded-[10px] text-[13px]
                 bg-[var(--c-btn-bg)] border border-[var(--c-border)]
                 text-[var(--c-text)] outline-none focus:border-[var(--c-accent)]
                 transition-colors cursor-pointer"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] text-[var(--c-text)]">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className="relative w-10 h-5 rounded-full transition-colors duration-200 flex-shrink-0"
        style={{ background: checked ? "var(--c-accent)" : "var(--c-border)" }}
      >
        <span
          className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow
                     transition-all duration-200"
          style={{ left: checked ? "22px" : "2px" }}
        />
      </button>
    </div>
  );
}

/* ── Accordion Section ───────────────────── */
function Section({ icon: Icon, title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4
                   hover:bg-[var(--c-hov-bg)] transition-colors duration-150"
      >
        <div className="flex items-center gap-2.5">
          <Icon size={16} className="text-[var(--c-accent)]" />
          <span className="text-[14px] font-semibold text-[var(--c-text)]">{title}</span>
        </div>
        {open
          ? <ChevronUp  size={16} className="text-[var(--c-icon)]" />
          : <ChevronDown size={16} className="text-[var(--c-icon)]" />
        }
      </button>

      {/* Content */}
      {open && (
        <div className="px-6 pb-5 pt-1 border-t border-[var(--c-border)] flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════
   SETTINGS PAGE
════════════════════════════════════════════ */
export default function SettingsPage() {
  const { t } = useTranslation("settings");

  /* ── Hospital Info state ─────────────────── */
  const [hospital, setHospital] = useState({
    name:    "مستشفى الرعاية المتقدمة",
    email:   "info@advancedcare.sa",
    phone:   "+966 11 234 5678",
    address: "الرياض، حي النخيل، شارع الملك فهد",
    license: "MOH-2024-001234",
    website: "www.advancedcare.sa",
    taxNo:   "300123456700003",
  });

  /* ── Language & Region state ─────────────── */
  const [region, setRegion] = useState({
    language:  "ar",
    timezone:  "Asia/Riyadh",
    currency:  "SAR",
    dateFormat:"DD/MM/YYYY",
  });

  /* ── Notifications state ─────────────────── */
  const [notif, setNotif] = useState({
    emailAlerts:    true,
    smsAlerts:      false,
    appointmentReminders: true,
    lowStockAlerts: true,
    systemUpdates:  false,
  });

  /* ── Security state ──────────────────────── */
  const [security, setSecurity] = useState({
    twoFactor:      false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginAttempts:  "5",
  });

  /* ── Appearance state ────────────────────── */
  const [appearance, setAppearance] = useState({
    theme:       "light",
    accentColor: "#1f7ead",
    fontSize:    "medium",
    sidebarStyle:"default",
  });

  /* ── Backup state ────────────────────────── */
  const [backup, setBackup] = useState({
    autoBackup:     true,
    frequency:      "daily",
    retention:      "30",
    lastBackup:     "2026-04-14 03:00",
  });

  const upd = (setter) => (key) => (e) =>
    setter((p) => ({ ...p, [key]: e.target?.value ?? e }));

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">

      {/* ── Page title ───────────────────────── */}
      <div className="flex items-center gap-2 mb-1">
        <Settings size={20} className="text-[var(--c-accent)]" />
        <h1 className="text-[20px] font-bold text-[var(--c-text)]">{t("pageTitle")}</h1>
      </div>

      {/* ════════════════════════════════════
          1 — Hospital Info (open by default)
      ════════════════════════════════════ */}
      <Section icon={Building2} title={t("sections.hospital")} defaultOpen>
        <Field label={t("fields.name")}>
          <Input value={hospital.name}    onChange={upd(setHospital)("name")}    placeholder={t("fields.name")}    />
        </Field>
        <Field label={t("fields.email")}>
          <Input value={hospital.email}   onChange={upd(setHospital)("email")}   placeholder={t("fields.email")}   type="email" />
        </Field>
        <Field label={t("fields.phone")}>
          <Input value={hospital.phone}   onChange={upd(setHospital)("phone")}   placeholder={t("fields.phone")}   />
        </Field>
        <Field label={t("fields.address")}>
          <Input value={hospital.address} onChange={upd(setHospital)("address")} placeholder={t("fields.address")} />
        </Field>
        <Field label={t("fields.license")}>
          <Input value={hospital.license} onChange={upd(setHospital)("license")} placeholder={t("fields.license")} />
        </Field>
        <Field label={t("fields.website")}>
          <Input value={hospital.website} onChange={upd(setHospital)("website")} placeholder={t("fields.website")} />
        </Field>
        <Field label={t("fields.taxNo")}>
          <Input value={hospital.taxNo}   onChange={upd(setHospital)("taxNo")}   placeholder={t("fields.taxNo")}   />
        </Field>
      </Section>

      {/* ════════════════════════════════════
          2 — Language & Region
      ════════════════════════════════════ */}
      <Section icon={Globe} title={t("sections.region")}>
        <Field label={t("fields.language")}>
          <Select value={region.language} onChange={upd(setRegion)("language")} options={[
            { value: "ar", label: "العربية" },
            { value: "en", label: "English" },
          ]} />
        </Field>
        <Field label={t("fields.timezone")}>
          <Select value={region.timezone} onChange={upd(setRegion)("timezone")} options={[
            { value: "Asia/Riyadh", label: "Riyadh (GMT+3)" },
            { value: "Asia/Dubai",  label: "Dubai (GMT+4)"  },
            { value: "Africa/Cairo",label: "Cairo (GMT+2)"  },
          ]} />
        </Field>
        <Field label={t("fields.currency")}>
          <Select value={region.currency} onChange={upd(setRegion)("currency")} options={[
            { value: "SAR", label: "ر.س — SAR" },
            { value: "AED", label: "د.إ — AED" },
            { value: "USD", label: "$ — USD"   },
          ]} />
        </Field>
        <Field label={t("fields.dateFormat")}>
          <Select value={region.dateFormat} onChange={upd(setRegion)("dateFormat")} options={[
            { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
            { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
            { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
          ]} />
        </Field>
      </Section>

      {/* ════════════════════════════════════
          3 — Notifications
      ════════════════════════════════════ */}
      <Section icon={Bell} title={t("sections.notifications")}>
        <div className="flex flex-col gap-3 pt-1">
          {Object.entries(notif).map(([key, val]) => (
            <Toggle
              key={key}
              checked={val}
              onChange={(v) => setNotif((p) => ({ ...p, [key]: v }))}
              label={t(`notifKeys.${key}`)}
            />
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════
          4 — Security
      ════════════════════════════════════ */}
      <Section icon={Shield} title={t("sections.security")}>
        <div className="flex flex-col gap-3 pt-1">
          <Toggle
            checked={security.twoFactor}
            onChange={(v) => setSecurity((p) => ({ ...p, twoFactor: v }))}
            label={t("securityKeys.twoFactor")}
          />
        </div>
        <Field label={t("securityKeys.sessionTimeout")}>
          <Select value={security.sessionTimeout} onChange={upd(setSecurity)("sessionTimeout")} options={[
            { value: "15",  label: "15 " + t("mins") },
            { value: "30",  label: "30 " + t("mins") },
            { value: "60",  label: "60 " + t("mins") },
            { value: "120", label: "120 " + t("mins") },
          ]} />
        </Field>
        <Field label={t("securityKeys.passwordExpiry")}>
          <Select value={security.passwordExpiry} onChange={upd(setSecurity)("passwordExpiry")} options={[
            { value: "30",  label: "30 " + t("days") },
            { value: "60",  label: "60 " + t("days") },
            { value: "90",  label: "90 " + t("days") },
            { value: "180", label: "180 " + t("days") },
          ]} />
        </Field>
        <Field label={t("securityKeys.loginAttempts")}>
          <Select value={security.loginAttempts} onChange={upd(setSecurity)("loginAttempts")} options={[
            { value: "3", label: "3" },
            { value: "5", label: "5" },
            { value: "10",label: "10" },
          ]} />
        </Field>
      </Section>

      {/* ════════════════════════════════════
          5 — Appearance
      ════════════════════════════════════ */}
      <Section icon={Palette} title={t("sections.appearance")}>
        <Field label={t("appearanceKeys.theme")}>
          <Select value={appearance.theme} onChange={upd(setAppearance)("theme")} options={[
            { value: "light",  label: t("themes.light")  },
            { value: "dark",   label: t("themes.dark")   },
            { value: "system", label: t("themes.system") },
          ]} />
        </Field>
        <Field label={t("appearanceKeys.fontSize")}>
          <Select value={appearance.fontSize} onChange={upd(setAppearance)("fontSize")} options={[
            { value: "small",  label: t("fontSizes.small")  },
            { value: "medium", label: t("fontSizes.medium") },
            { value: "large",  label: t("fontSizes.large")  },
          ]} />
        </Field>
        <Field label={t("appearanceKeys.accentColor")}>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={appearance.accentColor}
              onChange={upd(setAppearance)("accentColor")}
              className="w-9 h-9 rounded-lg cursor-pointer border border-[var(--c-border)]"
            />
            <Input
              value={appearance.accentColor}
              onChange={upd(setAppearance)("accentColor")}
              placeholder="#1f7ead"
            />
          </div>
        </Field>
      </Section>

      {/* ════════════════════════════════════
          6 — Backup
      ════════════════════════════════════ */}
      <Section icon={Database} title={t("sections.backup")}>
        <div className="flex flex-col gap-3 pt-1">
          <Toggle
            checked={backup.autoBackup}
            onChange={(v) => setBackup((p) => ({ ...p, autoBackup: v }))}
            label={t("backupKeys.autoBackup")}
          />
        </div>
        <Field label={t("backupKeys.frequency")}>
          <Select value={backup.frequency} onChange={upd(setBackup)("frequency")} options={[
            { value: "hourly",  label: t("frequencies.hourly")  },
            { value: "daily",   label: t("frequencies.daily")   },
            { value: "weekly",  label: t("frequencies.weekly")  },
            { value: "monthly", label: t("frequencies.monthly") },
          ]} />
        </Field>
        <Field label={t("backupKeys.retention")}>
          <Select value={backup.retention} onChange={upd(setBackup)("retention")} options={[
            { value: "7",  label: "7 "  + t("days") },
            { value: "14", label: "14 " + t("days") },
            { value: "30", label: "30 " + t("days") },
            { value: "90", label: "90 " + t("days") },
          ]} />
        </Field>
        <Field label={t("backupKeys.lastBackup")}>
          <span className="text-[13px] text-[var(--c-sub)]">{backup.lastBackup}</span>
        </Field>
        <div className="pt-2">
          <button className="h-9 px-4 rounded-[10px] text-[13px] font-semibold
                             border border-[var(--c-accent)] text-[var(--c-accent)]
                             hover:bg-[rgba(31,126,173,0.08)] transition-colors">
            {t("backupNow")}
          </button>
        </div>
      </Section>

      {/* ── Save button ──────────────────────── */}
      <div className="flex justify-end pb-4">
        <button
          className="flex items-center gap-2 h-10 px-6 rounded-[10px] text-[14px]
                     font-semibold bg-[var(--c-accent)] text-white hover:opacity-90
                     transition-opacity duration-150"
        >
          <Save size={15} />
          {t("save")}
        </button>
      </div>

    </div>
  );
}