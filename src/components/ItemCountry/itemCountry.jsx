import React from 'react';
import style from './itemCountry.module.scss';

// Composant ItemCountry représente la card affiché avecl'image les informations comme le continent, le nom du pays, les langues parlées puis à la fin le bouton GoogleMap
export default function ItemCountry({ country }) {

    return (
        <div className={style.item__container}>
            <div className={style.item__img__container}>
                <img className={style.img} src={country.flags.png} alt={country.flags.alt} />
            </div>
            <div className={style.item__informations}>
                <span className={style.region}>{country.region}</span>
                <span className={style.countryName}>{country.name.official}</span>
                <span>Liste des langues parlées :</span>
                <span>{ }</span>
            </div>
            <div>
                <button
                    className={style.item__btn}
                    onClick={() => window.open(country.maps.googleMaps, '_blank')}
                >
                    Voir sur GoogleMap
                </button>
            </div>
        </div>
    )
}
