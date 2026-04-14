import { Activity } from "lucide-react";

/**
 * @param {string} title    — عنوان القائمة (مترجم من الخارج)
 * @param {Array}  items    — [{ id, label, time }]
 */
export default function ActivityList({ title, items = [] }) {
  return (
    <div
      className="flex flex-col rounded-[14px]
                 bg-[var(--c-bg)] border border-[var(--c-border)]"
    >
      {/* Header */}
      {title && (
        <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--c-border)]">
          <Activity size={16} className="text-[var(--c-accent)]" />
          <h3 className="text-[14px] font-semibold text-[var(--c-text)]">
            {title}
          </h3>
        </div>
      )}

      {/* Items */}
      <ul className="flex flex-col divide-y divide-[var(--c-border)]">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-4
                       px-5 py-3.5 hover:bg-[var(--c-hov-bg)]
                       transition-colors duration-150"
          >
            <span className="text-[13.5px] text-[var(--c-text)]">
              {item.label}
            </span>
            <span className="text-[12px] text-[var(--c-sub)] whitespace-nowrap flex-shrink-0">
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}