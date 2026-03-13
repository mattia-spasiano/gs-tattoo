import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navbar: {
                        contacts: 'CONTACT US',
                        about: 'ABOUT',
                        gallery: 'ART GALLERY',
                        services: 'SERVICES'
                    },
                },
            },
            it: {
                translation: {
                    navbar: {
                        contacts: 'CONTATTI',
                        about: 'CHI SIAMO',
                        gallery: 'ART GALLERY',
                        services: 'SERVIZI'
                    },
                },
            },
            es: {
                translation: {
                    navbar: {
                        contacts: 'CONTACTOS',
                        about: 'QUIÉNES SOMOS',
                        gallery: 'ART GALLERY',
                        services: 'SERVICIOS'
                    },
                },
            },
        },
    });

export default i18n;