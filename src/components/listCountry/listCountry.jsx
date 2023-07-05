import React from 'react';
import style from './listCountry.module.scss';
import ItemCountry from '../ItemCountry/itemCountry';

export default function ListCountry() {
  return (
    <div className={style.list__container}>
        <ItemCountry/>
    </div>
  )
}
