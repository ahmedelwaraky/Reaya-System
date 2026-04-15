import { useTranslation } from "react-i18next";
import {
  Landmark,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  GitBranch,
  LayoutGrid,
  Bed,
  Stethoscope,
  UserCheck,
  Printer,
  FileText,
  Award,
  ShieldCheck,
  Building2,
  CalendarDays,
} from "lucide-react";

import StatusBadge from "../../../component/ui/StatusBadge";

import {
  ORG_INFO,
  ORG_CONTACT,
  ORG_STATS,
  ORG_BRANCHES,
  ORG_MANAGEMENT,
  ORG_CERTIFICATIONS,
} from "../api/organization.api";

/* ── Reusable card ───────────────────────── */
function Card({
  title,
  titleColor = "var(--c-accent)",
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4 ${className}`}
    >
      {title && (
        <h3 className="text-[13px] font-semibold" style={{ color: titleColor }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

/* ── Info row ────────────────────────────── */
function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-[var(--c-border)] last:border-0">
      <span className="text-[12px] text-[var(--c-sub)] whitespace-nowrap flex-shrink-0">
        {label}
      </span>
      <span className="text-[13px] text-[var(--c-text)] font-medium text-end">
        {value}
      </span>
    </div>
  );
}

/* ── Contact row ─────────────────────────── */
function ContactRow({ icon: Icon, value, href }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <Icon size={15} className="text-[var(--c-accent)] flex-shrink-0" />
      {href ? (
        <a
          href={href}
          className="text-[13px] text-[var(--c-accent)] hover:underline"
        >
          {value}
        </a>
      ) : (
        <span className="text-[13px] text-[var(--c-text)]">{value}</span>
      )}
    </div>
  );
}

/* ── Mini stat box ───────────────────────── */
function MiniStat({ icon: Icon, value, label }) {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center gap-1 py-4 px-2
                    rounded-xl bg-[var(--c-surface,var(--c-btn-bg))] border border-[var(--c-border)]"
    >
      <Icon size={20} className="text-[var(--c-accent)]" />
      <span className="text-[20px] font-bold text-[var(--c-text)]">
        {value}
      </span>
      <span className="text-[11px] text-[var(--c-sub)]">{label}</span>
    </div>
  );
}

/* ════════════════════════════════════════════
   ORGANIZATION PAGE
════════════════════════════════════════════ */
export default function Organization() {
  const { t } = useTranslation("organization");

  return (
    <div className="flex flex-col gap-6">
      {/* ── Page title ───────────────────────── */}
      <div className="flex items-center gap-2">
        <Landmark size={20} className="text-[var(--c-accent)]" />
        <h1 className="text-[20px] font-bold text-[var(--c-text)]">
          {t("pageTitle")}
        </h1>
      </div>

      {/* ── Row 1: Info + Contact ─────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Org Info */}
        <Card title={t("sections.info")}>
          <InfoRow label={t("fields.nameAr")} value={ORG_INFO.nameAr} />
          <InfoRow label={t("fields.nameEn")} value={ORG_INFO.nameEn} />
          <InfoRow label={t("fields.licenseNo")} value={ORG_INFO.licenseNo} />
          <InfoRow label={t("fields.ceo")} value={ORG_INFO.ceo} />
          <InfoRow label={t("fields.founded")} value={ORG_INFO.founded} />
          <InfoRow label={t("fields.type")} value={ORG_INFO.type} />
          <InfoRow label={t("fields.taxNo")} value={ORG_INFO.taxNo} />
          <InfoRow label={t("fields.crNo")} value={ORG_INFO.crNo} />
          <InfoRow
            label={t("fields.accreditation")}
            value={ORG_INFO.accreditation}
          />
        </Card>

        {/* Contact + Mini stats */}
        <div className="flex flex-col gap-4">
          <Card title={t("sections.contact")}>
            <ContactRow icon={MapPin} value={ORG_CONTACT.address} />
            <ContactRow
              icon={Phone}
              value={ORG_CONTACT.phone}
              href={`tel:${ORG_CONTACT.phone}`}
            />
            <ContactRow icon={Printer} value={ORG_CONTACT.fax} />
            <ContactRow
              icon={Mail}
              value={ORG_CONTACT.email}
              href={`mailto:${ORG_CONTACT.email}`}
            />
            <ContactRow
              icon={Globe}
              value={ORG_CONTACT.website}
              href={`https://${ORG_CONTACT.website}`}
            />
          </Card>

          {/* Mini stats grid */}
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
  
  <div className="flex gap-3">
    <MiniStat
      icon={Users}
      value={ORG_STATS.employees}
      label={t("stats.employees")}
    />

    <MiniStat
      icon={GitBranch}
      value={ORG_STATS.branches}
      label={t("stats.branches")}
    />

    <MiniStat
      icon={LayoutGrid}
      value={ORG_STATS.departments}
      label={t("stats.departments")}
    />
  </div>

  <div className="flex gap-3">
    <MiniStat
      icon={Bed}
      value={ORG_STATS.beds}
      label={t("stats.beds")}
    />

    <MiniStat
      icon={Stethoscope}
      value={ORG_STATS.doctors}
      label={t("stats.doctors")}
    />

    <MiniStat
      icon={UserCheck}
      value={ORG_STATS.patients}
      label={t("stats.patients")}
    />
  </div>

</div>
        </div>
      </div>

      {/* ── Row 2: Branches ──────────────────── */}
      <Card title={t("sections.branches")}>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-[var(--c-border)]">
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">
                  {t("branchTable.name")}
                </th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">
                  {t("branchTable.employees")}
                </th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">
                  {t("branchTable.departments")}
                </th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">
                  {t("branchTable.beds")}
                </th>
                <th className="py-2 px-3 text-start font-semibold text-[var(--c-sub)]">
                  {t("branchTable.status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {ORG_BRANCHES.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-[var(--c-border)] hover:bg-[var(--c-hov-bg)] transition-colors"
                >
                  <td className="py-3 px-3 font-medium text-[var(--c-text)]">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-[var(--c-accent)]" />
                      {b.name}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">
                    {b.employees}
                  </td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">
                    {b.departments}
                  </td>
                  <td className="py-3 px-3 text-[var(--c-sub)]">{b.beds}</td>
                  <td className="py-3 px-3">
                    <StatusBadge status={b.status} namespace="organization" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ── Row 3: Management + Certifications ── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Management team */}
        <Card title={t("sections.management")}>
          <div className="flex flex-col divide-y divide-[var(--c-border)]">
            {ORG_MANAGEMENT.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between py-3 gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full bg-[rgba(31,126,173,0.12)]
                                  flex items-center justify-center flex-shrink-0"
                  >
                    <Users size={15} className="text-[var(--c-accent)]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-[var(--c-text)]">
                      {m.name}
                    </span>
                    <span className="text-[11px] text-[var(--c-sub)]">
                      {m.role}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--c-sub)]">
                  <CalendarDays size={12} />
                  {t("fields.since")} {m.since}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Certifications */}
        <Card title={t("sections.certifications")}>
          <div className="flex flex-col divide-y divide-[var(--c-border)]">
            {ORG_CERTIFICATIONS.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between py-3 gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full bg-[rgba(16,185,129,0.12)]
                                  flex items-center justify-center flex-shrink-0"
                  >
                    <Award size={15} className="text-[#10b981]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-[var(--c-text)]">
                      {c.name}
                    </span>
                    <span className="text-[11px] text-[var(--c-sub)]">
                      {c.issuer}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StatusBadge status={c.status} namespace="organization" />
                  <span className="text-[11px] text-[var(--c-sub)]">
                    {c.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
