import style from './App.module.scss';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';

function App() {
  return (
    <div className={style.app__container}>
      <Header />
      <div className={style.app__container__searchbar}>
          <h1 className={style.app__title}>ma super page de recherche</h1>
          <SearchBar/>
      </div>
    </div>
  );
}

export default App;
