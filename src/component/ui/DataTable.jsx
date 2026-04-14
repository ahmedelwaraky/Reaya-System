import { useState }       from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DataTable({
  title,
  columns           = [],
  data              = [],
  searchValue       = "",
  onSearch,
  actions,
  searchPlaceholder = "Search...",
  pageSize          = 8,
}) {
  const { i18n } = useTranslation();
  const isRtl    = i18n.language === "ar";

  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const paginated  = data.slice((page - 1) * pageSize, page * pageSize);

  const handleSearch = (val) => {
    setPage(1);
    onSearch?.(val);
  };

  return (
    <div className="flex flex-col rounded-[14px] bg-[var(--c-bg)] border border-[var(--c-border)] overflow-hidden">

      {/* ── Header ── بدون تغيير ─────────────── */}
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[var(--c-border)] flex-wrap gap-y-3">
        {title && (
          <h2 className="text-[16px] font-bold text-[var(--c-text)] whitespace-nowrap">
            {title}
          </h2>
        )}
        <div className="flex items-center gap-2 ms-auto">
          {onSearch && (
            <div className="flex items-center gap-2 px-3 h-9 rounded-[10px] bg-[var(--c-btn-bg)] border border-[var(--c-border)]">
              <Search size={14} className="text-[var(--c-icon)] flex-shrink-0" />
              <input
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="bg-transparent border-none outline-none text-[13px]
                           text-[var(--c-text)] placeholder:text-[var(--c-sub)] w-40"
              />
            </div>
          )}
          {actions}
        </div>
      </div>

      {/* ── Table ── بدون تغيير ──────────────── */}
      <div className="overflow-x-auto">
        <table className="w-full text-[13.5px]">
          <thead>
            <tr className="border-b border-[var(--c-border)] bg-[var(--c-btn-bg)]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width, textAlign: "inherit" }}
                  className="px-5 py-3 text-[var(--c-sub)] font-semibold whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-[var(--c-sub)] text-[13px]"
                >
                  —
                </td>
              </tr>
            ) : (
              paginated.map((row, i) => (
                <tr
                  key={row.id ?? i}
                  className="border-b border-[var(--c-border)] last:border-0
                             hover:bg-[var(--c-hov-bg)] transition-colors duration-150"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-5 py-3 text-[var(--c-text)] whitespace-nowrap"
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key] ?? "—"
                      }
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ✅ جديد ───────────────── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--c-border)]">

          {/* Counter */}
          <span className="text-[12px] text-[var(--c-sub)]">
            {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, data.length)}
            {" / "}
            {data.length}
          </span>

          {/* Buttons */}
          <div className="flex items-center gap-1">

            {/* ✅ السهم بيتعكس حسب اللغة */}
            <PaginationBtn
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              icon={isRtl ? ChevronRight : ChevronLeft}
            />

            {getPageNumbers(page, totalPages).map((p, i) =>
              p === "..." ? (
                <span
                  key={`dot-${i}`}
                  className="w-8 h-8 flex items-center justify-center text-[13px] text-[var(--c-sub)]"
                >
                  ···
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={[
                    "w-8 h-8 rounded-lg text-[13px] font-medium transition-colors duration-150",
                    p === page
                      ? "bg-[var(--c-accent)] text-white"
                      : "text-[var(--c-sub)] hover:bg-[var(--c-hov-bg)] hover:text-[var(--c-text)]",
                  ].join(" ")}
                >
                  {p}
                </button>
              )
            )}

            {/* ✅ السهم بيتعكس حسب اللغة */}
            <PaginationBtn
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              icon={isRtl ? ChevronLeft : ChevronRight}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Helpers ─────────────────────────────── */
function PaginationBtn({ onClick, disabled, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-8 h-8 rounded-lg flex items-center justify-center
                 text-[var(--c-icon)] hover:bg-[var(--c-hov-bg)]
                 hover:text-[var(--c-text)] disabled:opacity-30
                 disabled:cursor-not-allowed transition-colors duration-150"
    >
      <Icon size={15} />
    </button>
  );
}

function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4)       return [1, 2, 3, 4, 5, "...", total];
  if (current >= total - 3) return [1, "...", total-4, total-3, total-2, total-1, total];
  return [1, "...", current-1, current, current+1, "...", total];
}