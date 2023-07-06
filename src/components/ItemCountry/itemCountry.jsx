import React from 'react';
import style from './itemCountry.module.scss';
import ButtonMaps from '../ButtonMaps/buttonMaps';

// Composant ItemCountry représente la card affiché avecl'image les informations comme le continent, le nom du pays, les langues parlées puis à la fin le composant bouton qui revoit sur GoogleMap
export default function ItemCountry({ country }) {

    return (
        <div className={style.item__container}>
            <div className={style.item__img__container}>
                <img className={style.img} src={country.flags.png} alt={country.flags.alt} />
            </div>
            <div className={style.item__informations}>
                <span className={style.region}>{country.region}</span>
                <span className={style.countryName}>{country.name.official}</span>
                <div className={style.item__list__languages}>
                    <h4>Liste des langues parlées :</h4>
                    {country.languages && (
                        Object.entries(country.languages).map(([languageCode, languageName]) => (
                            <span
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
