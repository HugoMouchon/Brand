import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';
import ListCountry from './components/listCountry/listCountry';
import { countriesAPI } from './api/countries-api';

function App() {
  // Le state 'countries' permet de stocker les données des différents pays
  const [countries, setCountries] = useState([]);

  // La fonction 'fetchAllCountries' permet de récupérer les données via la méthode 'fetchAllCountries' implémenter dans la fichier coutries-api et la stock dans une variable.
  // utilisation du setter afin de mettre à jours le state "countries"
  async function fetchAllCountries() {
    const listCountries = await countriesAPI.fetchAllCountries();
    setCountries(listCountries);
  }

  // Appel de la fonction "fetchAllCountries" au premier rendu du composant App.
  useEffect(() => {
    fetchAllCountries();
  }, [])

  console.log(countries );

  return (
    <div className={style.app__container}>
      <Header />
      <div className={style.app__container__searchbar}>
        <h1 className={style.app__title}>ma super page de recherche</h1>
        <SearchBar onChange={''} />
      </div>
      <div className={style.list__container}>
        <ListCountry countries={countries}/>
      </div>
    </div>
  );
}

export default App;
