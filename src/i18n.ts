import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import kr from "./locales/kr/translation.json";
import th from "./locales/th/translation.json";
import br from "./locales/br/translation.json";
import tw from "./locales/tw/translation.json";

const supported = ['en', 'kr', 'th', 'tw', 'br']
let savedLanguage = 'en'
try {
  const saved = localStorage.getItem('lang')
  if (saved && supported.includes(saved)) savedLanguage = saved
} catch { /* Keep English when device storage is unavailable. */ }

i18n
.use(initReactI18next)
.init({
  resources: {
    en: { translation: en },
    kr: { translation: kr },
    th: { translation: th },
    br: { translation: br },
    tw: { translation: tw }
  },

  lng: savedLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;