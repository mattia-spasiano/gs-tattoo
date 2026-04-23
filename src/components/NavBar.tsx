import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar() {

    const { t } = useTranslation();

    return (
        <>
            <div className="navbar flex w-full h-10 bg-white/15 backdrop-filter backdrop-blur-md fixed top-0">
                <ul className="nav-content  flex w-150 mx-auto my-auto justify-between font-thin text-sm">
                    <li className="w-35 text-center hover:font-bold">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="w-35 text-center hover:font-bold">
                        <Link to='/about'>{t('navbar.about')}</Link>
                    </li>
                    {/* <li className="w-35 text-center hover:font-bold">
                        <Link to='/services'>{t('navbar.services')}</Link>
                    </li> */}
                    <li className="w-35 text-center hover:font-bold">
                        <Link to='/art-gallery'>{t('navbar.gallery')}</Link>
                    </li>
                    <li className="w-35 text-center hover:font-bold">
                        <Link to='/contacts'>{t('navbar.contacts')}</Link>
                    </li>
                    <li className="w-fit hover:font-bold">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </>
    )
}