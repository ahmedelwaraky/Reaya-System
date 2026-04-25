import { useTranslation } from "react-i18next";

export default function DeleteModal({
  isOpen,
  name,
  type = "item",        // employee | patient | doctor | etc
  action = "delete",    // delete | ban | deactivate | reset
  onConfirm,
  onCancel,
}) {
  const { t } = useTranslation("common");

  if (!isOpen) return null;

  const isDanger = action === "delete" || action === "ban";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/40 backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div
        className={`w-full max-w-md rounded-2xl bg-white shadow-xl
                    border animate-scaleIn
                    ${isDanger ? "border-red-100" : "border-gray-200"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full
              ${isDanger ? "bg-red-50" : "bg-blue-50"}`}
          >
            {/* Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDanger ? "#DC2626" : "#2563EB"}
              strokeWidth="2"
            >
              <path d="M3 6h18" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-gray-800">
              {t(`actions.${action}.title`, { type: t(`types.${type}`) })}
            </h3>

            <p
              className={`text-[12px] font-medium
                ${isDanger ? "text-red-500" : "text-blue-500"}`}
            >
              {t(`actions.${action}.subtitle`)}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          <p className="text-[14px] text-gray-700 leading-relaxed">
            {t(`actions.${action}.message`)}
            <span className="block mt-2 font-semibold text-gray-900">
              {t(`types.${type}`)}: {name}
            </span>
          </p>

          <div
            className={`mt-4 p-3 rounded-lg text-[12px]
              ${isDanger
                ? "bg-red-50 border border-red-100 text-red-600"
                : "bg-blue-50 border border-blue-100 text-blue-600"}`}
          >
            ⚠️ {t(`actions.${action}.warning`)}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-5 py-4 border-t border-gray-100">
          <button
            onClick={onCancel}
            className="px-4 h-9 text-[13px] rounded-lg border border-gray-300
                       text-gray-700 hover:bg-gray-100 transition"
          >
            {t("common.cancel")}
          </button>

          <button
            onClick={onConfirm}
            className={`px-4 h-9 text-[13px] rounded-lg text-white transition
              ${isDanger ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {t(`actions.${action}.confirm`)}
          </button>
        </div>
      </div>
    </div>
  );
}