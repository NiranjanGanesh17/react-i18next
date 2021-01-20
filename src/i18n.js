
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translationEN.json';
import translationIT from './locales/it/translationIT.json';
import translationJP from './locales/jp/translationJP.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    it: {
        translation: translationIT
    },
    jp: {
        translation: translationJP
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "jp",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;