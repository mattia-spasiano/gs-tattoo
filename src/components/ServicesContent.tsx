import { Link } from "react-router-dom";
import { useState } from "react"
import { type Service } from "../constants/services"
import { useTranslation } from "react-i18next";

interface ServicesContentProps {
    service: Service;
    isEven: boolean;
}

export default function ServicesContent({ service, isEven }: ServicesContentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();


    return (
        <>
            <section id={service.name} className="service mbe-10">
                <div className={`sec-img ${isOpen ? 'h-100' : 'h-60'} duration-300 transition-[height] bg-position-[center_bottom_-200px] bg-size-[1600px]`} style={{ backgroundImage: `url(${service.img})` }}>
                    <div className="bg-black w-full h-full opacity-80 relative mb-auto">
                        <div className={` flex-col absolute w-100 my-20 ${isEven ? ' right-30 text-right' : 'left-30'}`}>
                            <div className={`flex gap-5 text-right mbe-10 ${isEven && 'justify-end'}`}>
                                <h2 className="text-5xl font-semibold underline decoration-2 text-right">{service.name}</h2>
                                <button className={`CTA ${isOpen ? 'rotate-45' : ''} flex justify-center origin-center items-center duration-300`} onClick={() => setIsOpen(!isOpen)}><span className="text-5xl font-semibold leading-none baseline-top">+</span></button>
                            </div>
                            <section className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0'}`}>
                                <p className="text-lg">{t(service.description)}</p>
                                <button className="bg-white text-black font-bold py-2 px-3 rounded-lg mbs-5"><Link to='/contacts'>{t('GET IN TOUCH')}</Link></button>
                            </section>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}