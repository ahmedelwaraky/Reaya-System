import { useTranslation } from "react-i18next";
import AuthPanel          from "../components/AuthPanel";
import LoginForm          from "../components/LoginForm";

export default function Login() {
  const { i18n } = useTranslation();
  const isRtl    = i18n.language === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen flex bg-[var(--c-surface)] transition-colors duration-300"
    >
      <AuthPanel />
      <LoginForm />
    </div>
  );
}