import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';
import ListCountry from './components/listCountry/listCountry';
import { countriesAPI } from './api/countries-api';

function App() {
  // Le state 'countries' permet de stocker les données des différents pays
  const [allCountries, setAllCountries] = useState([]);
  // Le state 'listCountriesLanguage' permet de stocker la liste des pays qui parle une langue défini
  const [listCountriesLanguage, setListCountriesLanguage] = useState([]);
  // Le state 'searchLanguage' permet de stocker la langue tapé par l'utilisateur dans la barre de recherche
  const [searchLanguage, setSearchLanguage] = useState('');

  // La fonction asynchrone'fetchAllCountries' permet de récupérer les données via la méthode 'fetchAllCountries' implémenter dans la fichier coutries-api et la stock dans une variable.
  // utilisation du setter afin de mettre à jours le state "countries"
  async function fetchAllCountries() {
    const listCountries = await countriesAPI.fetchAllCountries();
    setAllCountries(listCountries);
  }

  // La fonction asynchrone 'fetchAllCountriesByLanguage' permet de récupérer la liste des pays selon la langue choisi
  async function fetchAllCountriesByLanguage(lang) {
    const listCountriesLanguage = await countriesAPI.fetchCountriesLanguagesByLang(lang);
    setListCountriesLanguage(listCountriesLanguage);
  }

  // Appel de la fonction "fetchAllCountries" au premier rendu du composant App.
  useEffect(() => {
    fetchAllCountries();
  }, [])

  // Appel de la fonction "fetchAllCountriesByLanguage" avec la variable "searchLanguage" qui contient la langue tapé par l"utilisateur dans la barre de recherche et rappel cette fonction a chaque fois que "searchLanguage" change de valeur
  useEffect(() => {
    fetchAllCountriesByLanguage(searchLanguage);
  }, [searchLanguage])

  // Fonction 'handleSearchLanguage' qui a pour but de mettre a jours le state 'searchLanguage' avec la langue récupéré depuis la searchBar
  function handleSearchLanguage(language) {
    setSearchLanguage(language);
  }

  console.log(listCountriesLanguage);

  return (
    <div className={style.app__container}>
      <Header />
      <div className={style.app__container__searchbar}>
        <h1 className={style.app__title}>Ma super page de recherche</h1>
        <SearchBar onChange={handleSearchLanguage} />
      </div>
      <div className={style.list__container}>
        <ListCountry
          //utilisation d'un ternaire afin d'afficher par defaut tous les pays, sinon si elle existe, la liste des pays triée par leur langues.
          allCountries={listCountriesLanguage.length > 0 ? listCountriesLanguage : allCountries}
        />
      </div>
    </div>
  );
}

export default App;
