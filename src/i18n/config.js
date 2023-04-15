import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Registering the detection plugin
  .init({
      fallbackLng: 'bg',
      // lng: 'en',
      resources: {
        bg: {
          translations: require('./locales/bg.json')
        },
        en: {
          translations: require('./locales/en.json')
        },
      },
      ns: ['translations'],
      defaultNS: 'translations'
  });

i18n.languages = ['bg', 'en'];

export default i18n;