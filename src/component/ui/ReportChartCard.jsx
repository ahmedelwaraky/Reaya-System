/**
 * Wrapper card for report charts — title + fixed-height container
 *
 * @param {string}    title
 * @param {number}    height   — chart area height in px (default: 200)
 * @param {ReactNode} children — any chart component (MiniLineChart, MiniBarChart, etc.)
 *
 * @example
 * <ReportChartCard title="الإيرادات الشهرية">
 *   <MiniLineChart data={MONTHLY_REVENUE} color="#1f7ead" />
 * </ReportChartCard>
 */
export default function ReportChartCard({ title, height = 200, children }) {
  return (
    <div className="rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] p-5 flex flex-col gap-4">
      {title && (
        <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
          {title}
        </h3>
      )}
      <div style={{ width: "100%", height }}>{children}</div>
    </div>
  );
}
