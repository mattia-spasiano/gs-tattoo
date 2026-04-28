import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants/services.ts";
import ServicesContent from "../components/ServicesContent.tsx";
import ReviewsList from "../components/Reviews.tsx";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <section id="hero" className="mb-5 mbs-7">
                <div style={{ backgroundColor: `blue` }} className="w-full h-screen relative">
                    <div className="w-full text-center absolute top-90">
                        <p>{t('hero.description')}</p>
                        <h2>-{t('hero.author')}</h2>
                    </div>
                    <figure className="absolute w-full top-125">
                        <img src="https://placehold.co/250x150" alt="" className="logo flex mx-auto" />
                    </figure>
                    <div className="name absolute w-full top-110 text-center">
                        <p className="font-semibold text-4xl underline decoration-2"><Link to="/about">GIUSEPPE SPASIANO</Link></p>
                    </div>
                </div>
            </section>
            {SERVICES.map((service, index) => (
                <ServicesContent key={service.id}
                service={service}
                isEven={index % 2 === 0} />
            ))}
            { /* Passiamo isEven per fare in modo di ottenere le prop che ci servono all'interno del componente, spiegando anche in che modo utilizzare la prop da aggiungere come booleano all'interno della nostra interface. */}
            <section id="reviews" className="flex relative bg-[#0E0E0E] h-100 mx-auto overflow-hidden">
                <ReviewsList />
            </section>
        </>
    )
}