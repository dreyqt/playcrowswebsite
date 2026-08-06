import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import kr from "./locales/kr/translation.json";
import th from "./locales/th/translation.json";
import br from "./locales/br/translation.json";
import tw from "./locales/tw/translation.json";

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

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;