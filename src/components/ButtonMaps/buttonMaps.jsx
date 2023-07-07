import React, { useEffect, useRef } from 'react';
import style from './buttonMaps.module.scss';
import { fadeBottomButton } from './buttonMapsAnimation';

// Composant de bouton qui renvoie sur une page Google Maps
export default function ButtonMaps({ country }) {

    // Utilisation du useRef pour animer l'element bouton
    const buttonRef = useRef(null);

    // Appel de l'animation a chaque changement de country.
    useEffect(() => {
        const btn = buttonRef.current;
        fadeBottomButton(btn)
    }, [country])
    

    return (
        <>
            <button
                className={style.item__btn}
                onClick={() => window.open(country.maps.googleMaps, '_blank')} // Renvoi l'utilisateur sur une nouvelle page web notamment sur googleMaps avec les coodonées du pays choisis
                ref={buttonRef}
            >
                Voir sur GoogleMap
            </button>
        </>
    )
}
