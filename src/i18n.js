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
                    },
                    reviews: {
                        source: "All reviews are taken from Google Reviews, check them out!",
                        review1: "I got a tattoo at GreatSkin and was extremely satisfied with the experience. The result was exactly what I had envisioned. Even though I don't speak fluent Spanish, everything was explained to me clearly and with a lot of patience. The artist took my wishes seriously and showed real care and understanding. I can definitely recommend this Studio.",
                        review2: "Very nice and good work! Very happy about it!!",
                        review3: "The tattoo artist is definitely skilled and professional. I first went to him to have a poorly done tattoo fixed, and he really earned my trust. Since then, I've gotten four more tattoos, all of which were done excellently. I highly recommend this place to anyone looking to get a tattoo.",
                        review4: "I'd been wanting to get a microdermal piercing for years. Finally, I discovered this place, and it was the best decision I could have made. The service was top-notch: my appointment started right on time, the place was spotless, and the staff was incredibly friendly. They gave me detailed aftercare instructions and were always available to answer any questions or offer help with aftercare. They performed this complicated piercing with great precision and kindness. Without a doubt, this is where I'll go for my next piercings or tattoos. Thanks to Giuseppe!!",
                        review5: "It was my first time there, and it was an incredible experience! He gave me great advice on the design and tailored it to my tastes and preferences. He also recommended the best spot for a perfect result. I loved the final result—you can really see the level of detail and professionalism. I'll definitely be back for my next tattoo. He's a true professional!"
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
                    hero: {
                        description: "Il mio corpo è il mio diario, e i miei tatuaggi sono la mia storia.",
                        author: 'Johnny Depp'
                    },
                    homepage: {
                        tattoo: "Realismo, anime, stilizzato o fineart, qualsiasi sia la tua esigenza ti accompagnerò nella realizzazione della tua idea dalla progettazione del tatuaggio fino alla realizzazione sulla tua pelle, con completa assistenza sulla guarigione.",
                        piercings: "Il nostro servizio per la realizzazione di piercings include il top di gamma dei prodotti e procedure per minimizzare il dolore ed avere la miglior guarigione possibile.",
                        art: "Se sei curioso di vedere i miei lavori, sentiti libero di vedere la mia galleria d'arte, dove sono presenti tutti i miei lavori migliori."
                    },
                    reviews: {
                        source: "Tutte le recensioni sono gestite da Google, clicca qui per altre informazioni!",
                        review1: "Mi sono fatta un tatuaggio da GreatSkin e sono rimasta estremamente soddisfatta dell'esperienza. Il risultato è stato esattamente come me lo ero immaginato. Anche se non parlo spagnolo fluentemente, mi è stato spiegato tutto in modo chiaro e con molta pazienza. Il tatuatore ha preso sul serio i miei desideri e ha dimostrato grande attenzione e comprensione. Consiglio vivamente questo studio.",
                        review2: "Davvero bello e ben fatto! Ne sono davvero contento!!",
                        review3: "Il tatuatore è decisamente competente e professionale, ho iniziato con lui chiedendogli di aggiustare un disegno di un lavoro fatto male e si è conquistato decisamente la mia fiducia, da lì in poi ho fatto altri 4 tatuaggi, tutti eseguiti in maniera eccellente, è un posto che consiglio vivamente a chi si vuole tatuare.",
                        review4: "Era da anni che volevo farmi un piercing microdermico. Finalmente ho scoperto questo posto, ed è stata la scelta migliore che potessi fare. Il servizio è stato eccellente: l'appuntamento è iniziato puntuale, il locale era pulitissimo e il personale incredibilmente cordiale. Mi hanno fornito istruzioni dettagliate per la cura post-trattamento e sono sempre stati disponibili a rispondere a qualsiasi domanda o a offrire assistenza. Hanno eseguito questo piercing complesso con grande precisione e gentilezza. Senza dubbio, è qui che tornerò per i miei prossimi piercing o tatuaggi. Grazie a Giuseppe!!",
                        review5: "Era la mia prima volta lì ed è stata un'esperienza incredibile! Mi ha dato ottimi consigli sul design e lo ha adattato ai miei gusti e alle mie preferenze. Mi ha anche consigliato la zona migliore per un risultato perfetto. Ho adorato il risultato finale: si può vedere chiaramente il livello di dettaglio e professionalità. Tornerò sicuramente per il mio prossimo tatuaggio. È un vero professionista!"
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
                    hero: {
                        description: "Mi cuerpo es mi diario, y mis tatuajes son mi historia.",
                        author: 'Johnny Depp'
                    },
                    homepage: {
                        tattoo: "Realismo, anime, estilo estilizado o fine art: sean cuales sean tus necesidades, te acompañaré en la materialización de tu idea, desde el diseño del tatuaje hasta su realización en tu piel, con un seguimiento completo durante el proceso de cicatrización.",
                        piercings: "Nuestro servicio de perforación corporal incluye productos y procedimientos de primera calidad para minimizar el dolor y garantizar la mejor cicatrización posible.",
                        art: "Si tienes curiosidad por ver mis obras, no dudes en echar un vistazo a mi galería de arte, donde encontrarás mis mejores trabajos."
                    },
                    reviews: {
                        source: "Todas las reseñas las gestiona Google. ¡Haz clic aquí para obtener más información!",
                        review1: "Me hice un tatuaje en GreatSkin y quedé muy satisfecha con la experiencia. El resultado fue exactamente como lo había imaginado. Aunque no hablo español con fluidez, me lo explicaron todo con claridad y mucha paciencia. El tatuador se tomó muy en serio mis deseos y demostró mucha atención y comprensión. Recomiendo encarecidamente este estudio.",
                        review2: "¡Es realmente bonito y está muy bien hecho! ¡Estoy muy contento con él!",
                        review3: "El tatuador es muy competente y profesional; empecé acudiendo a él para que me retocara un tatuaje que me habían hecho mal y se ganó mi confianza por completo; desde entonces me he hecho otros cuatro tatuajes, todos ellos realizados de forma excelente; es un sitio que recomiendo encarecidamente a cualquiera que quiera hacerse un tatuaje.",
                        review4: "Llevaba años queriendo hacerme un piercing microdermal. Al final descubrí este sitio y fue lo mejor. Una atención de 10, con cita puntual, el lugar impoluto y el trato buenísimo. Con explicaciones de cuidados y a disposición de cualquier duda o ayuda en los cuidados. Con mucha precisión, en este piercing complicado y mucha amabilidad. Sin duda, mi sitio para próximos piercing o tattoos. Gracias a Giuseppe!!",
                        review5: "Es la primera vez que iba y la experiencia fue increíble! Me aconsejó bien con el diseño y lo ajustó a mis gustos y preferencias, también me aconsejó sobre la mejor zona para que quedara perfecto. El resultado final me encantó: se nota el nivel de detalle y profesionalismo. Sin duda volveré para el próximo tatuaje. Es todo un profesional!"
                    }
                },
            },
        },
    });

export default i18n;