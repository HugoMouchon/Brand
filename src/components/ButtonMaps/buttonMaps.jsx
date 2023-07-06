import React from 'react';
import style from './buttonMaps.module.scss';

// Composant de bouton qui renvoie sur une page Google Maps
export default function ButtonMaps({ country }) {
    return (
        <>
            <button
                className={style.item__btn}
                onClick={() => window.open(country.maps.googleMaps, '_blank')}
            >
                Voir sur GoogleMap
            </button>
        </>
    )
}
