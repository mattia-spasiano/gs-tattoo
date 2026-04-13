import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HOMESECTIONS } from "../constants/services.ts"
import LanguageSwitcher from "../components/LanguageSwitcher.tsx";
import ReviewsList from "../components/Reviews.tsx";

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <LanguageSwitcher />
            <section id="hero" className="mb-5">
                <div style={{ backgroundColor: `blue`}} className="w-full h-screen relative">
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
            {HOMESECTIONS.map((service, index) => (
                <section key={service.id} id={service.name} className="service mbe-10">
                    <div className="sec-img bg-position-[center_bottom_-400px] bg-size-[1600px]" style={{ backgroundImage: `url(${service.img})` }}>
                        <div className="bg-black w-full h-full opacity-80 relative mb-auto">
                            <div className={`absolute w-125 mbs-25 ${index % 2 === 0 ? ' right-30 text-right' : 'left-30'}`}>
                                <p className="text-2xl font-thin mbe-20">{t(service.description)}</p>
                                {/* Reminder: shouldn't use a string type in the parenthesis, as the string is present inside the services.ts file. This applies every time we use a .map() method. */}
                                <h2 className="text-5xl font-semibold underline decoration-2">{service.name}</h2>
                            </div>
                        </div>

                    </div>
                </section>
            ))}
            <section id="reviews" className="flex relative bg-[#0E0E0E] h-100 mx-auto overflow-hidden">
                <ReviewsList />
            </section>
        </>
    )
}