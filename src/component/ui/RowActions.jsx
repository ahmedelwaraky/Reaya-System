import { Eye, Pencil, Trash2, MoreHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * @param {function} onView
 * @param {function} onEdit
 * @param {function} onDelete
 * @param {Array}    extraActions — [{ label, icon: Icon, onClick, variant? }]
 *                  variant: "default" | "danger" | "warning" | "success"
 */
export default function RowActions({ onView, onEdit, onDelete, extraActions = [] }) {
  const [open, setOpen]   = useState(false);
  const menuRef           = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const variantColor = {
    default: "text-[var(--c-text)] hover:text-[var(--c-accent)] hover:bg-[var(--c-hov-bg)]",
    danger:  "text-red-500 hover:text-red-600 hover:bg-red-50",
    warning: "text-amber-500 hover:text-amber-600 hover:bg-amber-50",
    success: "text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50",
  };

  return (
    <div className="flex items-center gap-1">

      {/* ── View ─────────────────────────────── */}
      <button
        onClick={onView}
        className="p-1.5 rounded-lg text-[var(--c-icon)]
                   hover:text-[var(--c-accent)] hover:bg-[var(--c-hov-bg)]
                   transition-colors duration-150"
      >
        <Eye size={15} />
      </button>

      {/* ── Edit ─────────────────────────────── */}
      <button
        onClick={onEdit}
        className="p-1.5 rounded-lg text-[var(--c-icon)]
                   hover:text-[var(--c-accent)] hover:bg-[var(--c-hov-bg)]
                   transition-colors duration-150"
      >
        <Pencil size={15} />
      </button>

      {/* ── Delete ───────────────────────────── */}
      <button
        onClick={onDelete}
        className="p-1.5 rounded-lg text-[var(--c-icon)]
                   hover:text-red-500 hover:bg-[var(--c-hov-bg)]
                   transition-colors duration-150"
      >
        <Trash2 size={15} />
      </button>

      {/* ── More (dropdown) ──────────────────── */}
      {extraActions.length > 0 && (
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen((p) => !p)}
            className={[
              "p-1.5 rounded-lg text-[var(--c-icon)] transition-colors duration-150",
              "hover:text-[var(--c-accent)] hover:bg-[var(--c-hov-bg)]",
              open ? "bg-[var(--c-hov-bg)] text-[var(--c-accent)]" : "",
            ].join(" ")}
          >
            <MoreHorizontal size={15} />
          </button>

          {open && (
            <div
              className={[
                "absolute z-50 mt-1 py-1 w-44",
                "bg-[var(--c-bg)] border border-[var(--c-border)]",
                "rounded-[10px] shadow-lg",
                // ✅ لو قريب من اليمين يفتح لليسار
                "end-0",
              ].join(" ")}
            >
              {extraActions.map((action, i) => {
                const Icon    = action.icon;
                const variant = action.variant ?? "default";
                return (
                  <button
                    key={i}
                    onClick={() => { action.onClick(); setOpen(false); }}
                    className={[
                      "flex items-center gap-2.5 w-full px-3 py-2",
                      "text-[13px] transition-colors duration-150",
                      variantColor[variant] ?? variantColor.default,
                    ].join(" ")}
                  >
                    {Icon && <Icon size={14} className="flex-shrink-0" />}
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}