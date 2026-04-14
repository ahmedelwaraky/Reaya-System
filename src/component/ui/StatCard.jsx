import { ArrowUpRight, ArrowDownRight } from "lucide-react";

/**
 * @param {string}    label       — اسم الكارد (مترجم من الخارج)
 * @param {string}    value       — القيمة الرئيسية
 * @param {number}    change      — نسبة التغيير مثلاً 12 أو -5
 * @param {ReactNode} icon        — أيقونة lucide
 * @param {string}    iconBg      — لون خلفية الأيقونة (اختياري)
 */
export default function StatCard({ label, value, change, icon: Icon, iconBg }) {
  const isPositive = change >= 0;

  return (
    <div
      className="flex items-center gap-4 p-4 rounded-[14px]
                 bg-[var(--c-bg)] border border-[var(--c-border)]"
    >
      {/* Icon */}
      {Icon && (
        <div
          className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ background: iconBg ?? "rgba(31,126,173,0.12)" }}
        >
          <Icon size={20} className="text-[var(--c-accent)]" />
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="text-[12px] text-[var(--c-sub)] whitespace-nowrap">
          {label}
        </span>
        <span className="text-[22px] font-bold text-[var(--c-text)] leading-tight">
          {value}
        </span>
        {change !== undefined && (
          <span
            className={[
              "flex items-center gap-0.5 text-[12px] font-medium",
              isPositive ? "text-emerald-500" : "text-red-500",
            ].join(" ")}
          >
            {isPositive
              ? <ArrowUpRight size={13} />
              : <ArrowDownRight size={13} />
            }
            {isPositive ? "+" : ""}{change}%
          </span>
        )}
      </div>
    </div>
  );
}