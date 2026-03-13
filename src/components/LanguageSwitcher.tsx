import { useTranslation } from "react-i18next";
export default function LanguageSwitcher() {

    interface NativeName {
        nativeName: string
    }
    interface Lngs {
        [key: string]: NativeName
    }

    const lngs: Lngs = {
        en: { nativeName: 'English'},
        es: { nativeName: 'Español'},
        it: { nativeName: 'Italiano'}
    };

    const { i18n } = useTranslation();

    return(
        <>
            <select name="" id="" value={i18n.resolvedLanguage} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                {Object.keys(lngs).map((lng) => (
                    <option key={lng} value={lng} style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} typeof="submit">
                        {lngs[lng].nativeName}
                    </option>
                ))}
            </select>
            {/* Used a select input instead of a button like shown in the documentation.
            Mistake I made: forgetting the value in the option element, it prevented the language to chance more than once for each language. */}
        </>
    )
}