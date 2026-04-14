import { useTranslation } from "react-i18next";
import { Hospital } from "lucide-react";
import Panal from "../../../assets/images/hospital-panal.jpg";
import Logo from "../../../assets/images/icon1.png";

export default function AuthPanel() {
  const { t } = useTranslation("auth");

  const stats = [
    { value: "١٢٤٧+", label: t("hero.stats.patients") },
    { value: "٨٦", label: t("hero.stats.doctors") },
    { value: "١٢", label: t("hero.stats.depts") },
  ];

  return (
    <div className="hidden lg:flex flex-col justify-between w-[45%] p-12 relative overflow-hidden">
      {/* ── Background image ─────────────────── */}
      <img
        src={Panal}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Overlay layer ────────────────────── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(31, 126, 173, 0.75)" }} // ✅ var(--c-accent) + opacity
      />

      {/* ── Pattern on top of overlay ────────── */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div
        className="absolute top-20 -left-10 w-40 h-40 rounded-full opacity-10"
        style={{ background: "white" }}
      />

      {/* ── Content (above all layers) ───────── */}

      {/* Logo */}
    <div className="flex items-center gap-3 relative z-10">
  <div className="w-20 h-20 rounded-[12px] flex items-center justify-center p-1">
    <img src={Logo} alt="logo" className="w-full h-full object-contain" />
  </div>

  <div className="flex flex-col">
    <span className="text-white font-bold text-[30px] leading-tight">
      {t("hospitalName")}
    </span>

    <span className="text-white/80 text-sm leading-tight text-[25px] pt-2">
      {t("hospitalSlogan")}
    </span>
  </div>
</div>

      {/* Center text */}
      <div className="relative z-10">
        <h1 className="text-white font-bold text-[36px] leading-tight mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-white/70 text-[15px] leading-relaxed max-w-sm">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-8 relative z-10">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-white font-bold text-[22px]">{s.value}</div>
            <div className="text-white/60 text-[12px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
