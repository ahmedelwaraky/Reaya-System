import { useTranslation }      from "react-i18next";
import { Download, FileText } from "lucide-react";

const FORMAT_ICONS = { PDF: "📄", Excel: "📊" };

const FORMAT_COLORS = {
  PDF:   { bg: "#fef2f2", text: "#dc2626", border: "#fecaca" },
  Excel: { bg: "#f0fdf4", text: "#16a34a", border: "#bbf7d0" },
};

/**
 * @param {Array} reports  — from SAVED_REPORTS in reports.api.js
 */
export default function SavedReportsList({ reports }) {
  const { t } = useTranslation("reports");


  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FileText size={16} className="text-[var(--c-accent)]" />
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {t("savedReports")}
        </h3>
        <span className="ms-auto text-[12px] text-[var(--c-muted,#9ca3af)]">
          {reports.length} {t("reportsCount")}
        </span>
      </div>

      {/* List */}
      <div className="flex flex-col divide-y divide-[var(--c-border)]">
        {reports.map((r) => {
          const fc = FORMAT_COLORS[r.format] ?? FORMAT_COLORS.PDF;
          return (
            <div key={r.id} className="flex items-center justify-between py-3 gap-4">

              {/* Icon + Info */}
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                  style={{ background: fc.bg, border: `1px solid ${fc.border}` }}
                >
                  {FORMAT_ICONS[r.format]}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[13px] font-medium text-[var(--c-text)] truncate">
                    {t(`reportNames.${r.nameKey}`)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[var(--c-muted,#9ca3af)]">
                      {r.date}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                      style={{ background: fc.bg, color: fc.text, border: `1px solid ${fc.border}` }}
                    >
                      {r.format}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download button */}
              <button
                onClick={() => console.log("download", r.id)}
                className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center
                           text-[var(--c-icon)] hover:bg-[var(--c-hov-bg)]
                           hover:text-[var(--c-accent)] transition-colors duration-150"
                title={t("download")}
              >
                <Download size={15} />
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
}