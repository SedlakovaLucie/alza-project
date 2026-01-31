import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cs from "./locales/cs.json";

i18n.use(initReactI18next).init({
  lng: "cs",
  fallbackLng: "cs",
  resources: {
    cs: {
      translation: cs,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});