import { useState }       from "react";
import { useNavigate }    from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme }       from "../../../core/ThemeContext";
import { Hospital, Eye, EyeOff, Globe, Sun, Moon } from "lucide-react";

export default function LoginForm() {
  const navigate                = useNavigate();
  const { t, i18n }             = useTranslation("auth");
  const { isDark, toggleTheme } = useTheme();
  const isRtl                   = i18n.language === "ar";

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const toggleLang = () => i18n.changeLanguage(isRtl ? "en" : "ar");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError(t("errors.emailRequired"));
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col">

      {/* ── Top bar ──────────────────────────── */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
      >
        {/* Logo — mobile only */}
        <div
          className="flex lg:hidden items-center gap-2"
          style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
        >
          <div className="w-9 h-9 rounded-[10px] bg-[var(--c-accent)] flex items-center justify-center">
            <Hospital size={18} color="white" />
          </div>
          <span className="text-[var(--c-accent)] font-bold text-[14px]">
            {t("hospitalName")}
          </span>
        </div>
        <div className="hidden lg:block" />

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-[10px] flex items-center justify-center
                       border border-[var(--c-border)] bg-[var(--c-btn-bg)]
                       text-[var(--c-icon)] hover:text-[var(--c-accent)]
                       hover:border-[var(--c-accent)] transition-all duration-150"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={toggleLang}
            className="w-9 h-9 rounded-[10px] flex items-center justify-center
                       border border-[var(--c-border)] bg-[var(--c-btn-bg)]
                       text-[var(--c-icon)] hover:text-[var(--c-accent)]
                       hover:border-[var(--c-accent)] transition-all duration-150"
          >
            <Globe size={16} />
          </button>
        </div>
      </div>

      {/* ── Form area ────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-[400px]">

          {/* Heading */}
          <div
            className="mb-8"
            style={{ textAlign: isRtl ? "right" : "left" }}
          >
            <h2 className="text-[26px] font-bold text-[var(--c-text)] mb-1">
              {t("form.title")}
            </h2>
            <p className="text-[14px] text-[var(--c-sub)]">
              {t("form.subtitle")}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[13px] font-medium text-[var(--c-text)]"
                style={{ textAlign: isRtl ? "right" : "left" }}
              >
                {t("form.email")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("form.emailPlaceholder")}
                dir={isRtl ? "rtl" : "ltr"}
                className={[
                  "h-11 px-4 rounded-[10px] text-[14px] w-full",
                  "bg-[var(--c-btn-bg)] border text-[var(--c-text)]",
                  "placeholder:text-[var(--c-sub)] outline-none",
                  "transition-all duration-150",
                  "focus:border-[var(--c-accent)] focus:bg-[var(--c-bg)]",
                  error ? "border-red-400" : "border-[var(--c-border)]",
                ].join(" ")}
                style={{ textAlign: isRtl ? "right" : "left" }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[13px] font-medium text-[var(--c-text)]"
                style={{ textAlign: isRtl ? "right" : "left" }}
              >
                {t("form.password")}
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("form.passwordPlaceholder")}
                  dir={isRtl ? "rtl" : "ltr"}
                  className={[
                    "h-11 rounded-[10px] text-[14px] w-full",
                    "bg-[var(--c-btn-bg)] border text-[var(--c-text)]",
                    "placeholder:text-[var(--c-sub)] outline-none",
                    "transition-all duration-150",
                    "focus:border-[var(--c-accent)] focus:bg-[var(--c-bg)]",
                    "border-[var(--c-border)]",
                  ].join(" ")}
                  style={{
                    textAlign:   isRtl ? "right" : "left",
                    paddingRight: isRtl ? "16px"  : "44px",
                    paddingLeft:  isRtl ? "44px"  : "16px",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute top-1/2 -translate-y-1/2 text-[var(--c-icon)]
                             hover:text-[var(--c-accent)] transition-colors duration-150"
                  style={{ [isRtl ? "left" : "right"]: "12px" }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p
                className="text-[12px] text-red-500"
                style={{ textAlign: isRtl ? "right" : "left" }}
              >
                {error}
              </p>
            )}

            {/* Forgot password */}
            <div style={{ textAlign: isRtl ? "left" : "right" }}>
              <button
                type="button"
                className="text-[13px] text-[var(--c-accent)] hover:underline"
              >
                {t("form.forgotPassword")}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="h-11 rounded-[10px] text-[14px] font-semibold text-white
                         transition-all duration-150 mt-1
                         disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: "var(--c-accent)" }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white
                                   rounded-full animate-spin" />
                  {t("form.loading")}
                </span>
              ) : (
                t("form.submit")
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}