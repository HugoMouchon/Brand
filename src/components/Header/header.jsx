import React from 'react';
import style from './header.module.scss';
import logo from '../../assets/images/logo.svg';

// composant Header avec le logo et la navigation
export default function Header() {
  return (
    <div className={style.header__container}>
        <div className={style.logo__container}>
            <img className={style.img} src={logo} alt="" />
        </div>
        <div className={style.nav__container}>
            <a href=""><li>accueil</li></a>
            <a href=""><li>recherche</li></a>
        </div>
    </div>
  )
}
