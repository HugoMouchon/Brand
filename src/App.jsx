import style from './App.scss';
import Header from './components/Header/header';

function App() {
  return (
    <div className={style.app__container}>
      <Header/>
    </div>
  );
}

export default App;
