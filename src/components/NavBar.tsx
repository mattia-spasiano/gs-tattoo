import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar() {

    const { t } = useTranslation();

    return(
        <>
            <ul>
                <li>
                    <Link to='/about'>{t('navbar.about')}</Link>
                </li>
                <li>
                    <Link to='/services'>{t('navbar.services')}</Link>
                </li>
                <li>
                    <Link to='/art-gallery'>{t('navbar.gallery')}</Link>
                </li>
                <li>
                    <Link to='/contact-us'>{t('navbar.contacts')}</Link>
                </li>
            </ul>
            <div>
                <LanguageSwitcher />
            </div>
        </>
    )
}