import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import style from './searchBar.module.scss';

// composant SearchBar qui permet de cherche une liste de pays parlant la langue choisi par l'utiisateur grace à la fonction handleChange
const SearchBar = ({ onChange }) => {

    // Ecouteur d'evenement qui récupère les valeurs tapées par l'utilisateur
    const handleChange = (event) => {
        const language = event.target.value;
        onChange(language);
    };

    return (
        <div className={style.searchBar__container}>
            <Input
                size="large"
                placeholder="Recherche par langue"
                suffix={<SearchOutlined />}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;