import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { LocaleProvider } from "@douyinfe/semi-ui";
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";
import App from "./App.jsx";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import zh_TW from "@douyinfe/semi-ui/lib/es/locale/source/zh_TW";
import "./index.css";
import "./i18n/i18n.js";

function getSemiLocale(language) {
  if (language?.startsWith("zh-TW")) return zh_TW;
  if (language?.startsWith("zh")) return zh_CN;
  return en_US;
}

function Root() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  useEffect(() => {
    document.documentElement.lang = currentLanguage || "en";
  }, [currentLanguage]);

  return (
    <LocaleProvider locale={getSemiLocale(currentLanguage)}>
      <App />
      <Analytics />
    </LocaleProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
