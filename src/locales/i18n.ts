import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import en from './en.json';
import uk from './uk.json';

i18n
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)

    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: en,
            },
            uk: {
                translation: uk,
            },
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
        debug: false,
    });

export default i18n;