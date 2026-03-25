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
                    hero: {
                        description: "My body is my journal, and my tattoos are my story.",
                        author: "Johnny Depp"
                    },
                    homepage: {
                        tattoo: "Realism, anime, stylized, or fine art—whatever your preference, I’ll guide you through the process of bringing your idea to life, from designing the tattoo to inking it onto your skin, with full support throughout the healing process.",
                        piercings: "Our piercing service uses top-of-the-line products and techniques to minimize pain and ensure the best possible healing.",
                        art: "If you're curious to see my work, feel free to check out my art gallery, where you'll find all my best pieces."
                    }
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
                    hero:{
                        description: "Il mio corpo è il mio diario, e i miei tatuaggi sono la mia storia.",
                        author: 'Johnny Depp'
                    },
                    homepage: {
                        tattoo: "Realismo, anime, stilizzato o fineart, qualsiasi sia la tua esigenza ti accompagnerò nella realizzazione della tua idea dalla progettazione del tatuaggio fino alla realizzazione sulla tua pelle, con completa assistenza sulla guarigione.",
                        piercings: "Il nostro servizio per la realizzazione di piercings include il top di gamma dei prodotti e procedure per minimizzare il dolore ed avere la miglior guarigione possibile.",
                        art: "Se sei curioso di vedere i miei lavori, sentiti libero di vedere la mia galleria d'arte, dove sono presenti tutti i miei lavori migliori."
                    }
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
                    hero:{
                        description: "Mi cuerpo es mi diario, y mis tatuajes son mi historia.",
                        author: 'Johnny Depp'
                    },
                    homepage: {
                        tattoo: "Realismo, anime, estilo estilizado o fine art: sean cuales sean tus necesidades, te acompañaré en la materialización de tu idea, desde el diseño del tatuaje hasta su realización en tu piel, con un seguimiento completo durante el proceso de cicatrización.",
                        piercings: "Nuestro servicio de perforación corporal incluye productos y procedimientos de primera calidad para minimizar el dolor y garantizar la mejor cicatrización posible.",
                        art: "Si tienes curiosidad por ver mis obras, no dudes en echar un vistazo a mi galería de arte, donde encontrarás mis mejores trabajos."
                    }
                },
            },
        },
    });

export default i18n;