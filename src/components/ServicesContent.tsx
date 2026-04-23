import { useState } from "react"
import type { Service } from "../constants/services"
import { useTranslation } from "react-i18next";

interface ServicesContentProps {
    service: Service;
}

export default function ServicesContent ({ service }: ServicesContentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    

    return (
        <>
        <button className="CTA" onClick={() => setIsOpen(!isOpen)}>{t('show more')}</button>
        {isOpen ? 
            <section>
                <p>{t(service.description)}</p>
            </section>
            : ''
        }
        </>
    )
}