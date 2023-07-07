import React, { useEffect, useRef } from 'react';
import style from './itemCountry.module.scss';
import ButtonMaps from '../ButtonMaps/buttonMaps';
import { fadeInCard, fadeInRegion, fadeInTitle, fadeInSubtitle, fadeInLanguages } from './itemCountryAnimation';

// Composant ItemCountry représente la card affiché avecl'image les informations comme le continent, le nom du pays, les langues parlées puis à la fin le composant bouton qui revoit sur GoogleMap
export default function ItemCountry({ country }) {

    // Utilisation du useRef pour cibler un element afin de l'animer
    const itemContainerRef = useRef(null);
    const itemRegionRef = useRef(null);
    const itemTitleRef = useRef(null);
    const itemSubRef = useRef(null);
    const itemLangRef = useRef(null);

    // Appel des animations au premier rendu du composant mais aussi lorsque country change
    useEffect(() => {
        const container = itemContainerRef.current;
        const region = itemRegionRef.current;
        const title = itemTitleRef.current;
        const sub = itemSubRef.current;
        const lang = itemLangRef.current;

        fadeInCard(container);
        fadeInRegion(region);
        fadeInTitle(title);
        fadeInSubtitle(sub);
        fadeInLanguages(lang);

    }, [country])

    return (
        <div ref={itemContainerRef} className={style.item__container}>
            <div className={style.item__img__container}>
                <img className={style.img} src={country.flags.png} alt={country.flags.alt} />
            </div>
            <div className={style.item__informations}>
                <span ref={itemRegionRef} className={style.region}>{country.region}</span>
                <span ref={itemTitleRef} className={style.countryName}>{country.name.official}</span>
                <div className={style.item__list__languages}>
                    <h4 ref={itemSubRef}>Liste des langues parlées :</h4>
                    {country.languages && (
                        Object.entries(country.languages).map(([languageCode, languageName]) => (
                            <span
                                ref={itemLangRef}
                                key={languageCode}>
                                {`${languageName}, `}
                            </span>
                        ))
                    )}
                </div>
            </div>
            <div>
                <ButtonMaps country={country} />
            </div>
        </div>
    )
}
