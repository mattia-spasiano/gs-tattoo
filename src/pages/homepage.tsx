import { useTranslation } from "react-i18next";
import { HOMESECTIONS } from "../constants/services.ts"
import LanguageSwitcher from "../components/LanguageSwitcher.tsx";

export default function HomePage() {
        const { t } = useTranslation();

    return(
        <>
            <LanguageSwitcher/>
            <section id="hero">
                <figure>
                    <img src="https://placehold.co/1440x900" alt="" className="hero-content"/>
                </figure>
                <div>
                    <p>{t('hero.description')}</p>
                </div>
                <figure>
                    <img src="https://placehold.co/250x150" alt="" className="logo" />
                </figure>
                <div className="name">
                    <p>GIUSEPPE SPASIANO</p>
                </div>
            </section>
            {HOMESECTIONS.map(service => (
                <section key={service.id} id={service.name} className="service">
                    <img src={service.img} className="sec-img"/>
                    <div>
                        <p>{t(service.description)}</p> 
                        {/* Reminder: shouldn't use a string type in the parenthesis, as the string is present inside the services.ts file. This applies every time we use a .map() method. */}
                        <h2>{service.name}</h2>
                    </div>
                </section>
            ))}
            <section id="reviews">
                <div>

                </div>
            </section>
        </>
    )
}