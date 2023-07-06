import React from 'react';
import style from './listCountry.module.scss';
import ItemCountry from '../ItemCountry/itemCountry';

// Le composant ListCountry permet d'utiliser la méthode map de Javascript afin d'itérer chaque composant ItemCountry par rapport au nombre de pays présent dans l'API
export default function ListCountry({ countries }) {
  return (
    <div className={style.list__container}>
      {countries.map((country, index) => (
        <ItemCountry key={index} country={country} />
      ))}
    </div>
  )
}
