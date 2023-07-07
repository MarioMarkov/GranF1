import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import locales_bg from "./locales/bg.json";
import locales_en from "./locales/en.json";
i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Registering the detection plugin
  .init({
    fallbackLng: "bg",
    // lng: 'en',
    resources: {
      bg: {
        translations: locales_bg,
      },
      en: {
        translations: locales_en,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["bg", "en"];

export default i18n;
