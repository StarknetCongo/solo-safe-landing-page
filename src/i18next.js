import i18next from 'i18next';
import en from './locales/en.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const language = window.localStorage.getItem('language');

i18next
  .use(LanguageDetector)
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng :  language || 'en',
    failingLng: 'en',
    // Using simple hardcoded resources for simple example
    resources: {
      en: { translation: en },
    },
  })

export default i18next;