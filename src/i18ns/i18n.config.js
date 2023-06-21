import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en'
import vi from './vi'

function getLocalLanguage() {
  return localStorage.getItem('language') ? localStorage.getItem('language') : 'en'
}

i18n
  .use(initReactI18next)
  .init({
    lng: getLocalLanguage(),
    resources: {
      en: {
        translation: en
      },
      vi: {
        translation: vi
      },
    },
  });

export default i18n;
