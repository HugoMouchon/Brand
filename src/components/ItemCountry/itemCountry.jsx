import React from 'react';
import style from './itemCountry.module.scss';
import logo from '../../assets/images/logo.svg'

export default function ItemCountry() {
    return (
        <div className={style.item__container}>
            <div className={style.item__img__container}>
                <img className={style.img} src={logo} alt="" />
            </div>
            <div className={style.item__informations}>
                <span>europe</span>
                <h2>France</h2>
                <span>Liste des langues parlées</span>
                <span>French</span>
            </div>
            <div className={style.item__btn}>
                <button>
                    coucou
                </button>
            </div>
        </div>
    )
}
