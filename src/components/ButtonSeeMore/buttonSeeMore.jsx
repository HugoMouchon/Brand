import React from 'react';
import style from './buttonSeeMore.module.scss';

export default function ButtonSeeMore({ onClick }) {
    return (
        <>
            <button
                className={style.item__btn}
                onClick={onClick}
            >
                Voir plus
            </button>
        </>
    )
}
