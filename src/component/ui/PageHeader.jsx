import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StatusBadge from "./StatusBadge"; // ← غير المسار حسب مشروعك

export default function PageHeader({
  title,
  subtitle,
  icon: Icon,
  statusBadge,   // الآن: { status: "active" } أو { status: "leave", label: "نص مخصص" }
  actions,
  onBack,
  showBack = true,
}) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  const BackIcon = isRtl ? ArrowLeft : ArrowRight;

  const variantStyle = {
    primary: { background: "var(--c-accent)", color: "#fff" },
    danger:  { background: "#ef4444",         color: "#fff" },
    ghost:   { background: "var(--c-btn-bg)", color: "var(--c-text)" },
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="flex items-center justify-between px-4 py-3 mb-4 transition-colors"
      style={{
        background: "var(--c-surface)",
        // border: "1px solid var(--c-border)",
      }}
    >
      {/* START: Icon + Title + Badge */}
      <div className="flex items-center gap-3">
        {Icon && (
          <div
            className="w-10 h-10 flex items-center justify-center rounded-xl"
            style={{ background: "var(--c-active-item)" }}
          >
            <Icon size={20} style={{ color: "var(--c-active-tx)" }} />
          </div>
        )}

        <div>
          <h1 className="text-base font-bold leading-tight" style={{ color: "var(--c-text)" }}>
            {title}
          </h1>

          {statusBadge ? (
            <div className="mt-1">
              <StatusBadge
                status={statusBadge.status}
                label={statusBadge.label}
                variant={statusBadge.variant}
              />
            </div>
          ) : subtitle ? (
            <p className="text-xs mt-0.5" style={{ color: "var(--c-sub)" }}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      {/* END: Actions + Back */}
      <div className="flex items-center gap-2">
        {actions?.map((action, i) => (
          <button
            key={i}
            onClick={action.onClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
            style={variantStyle[action.variant] ?? variantStyle.ghost}
          >
            {action.icon && <action.icon size={15} />}
            {action.label}
          </button>
        ))}

        {showBack && (
          <button
            onClick={handleBack}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{ background: "var(--c-btn-bg)", color: "var(--c-icon)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-icon-hov)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-icon)")}
          >
            <BackIcon size={16} />
          </button>
        )}
      </div>
    </div>
  );
}