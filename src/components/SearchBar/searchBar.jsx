import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import style from './searchBar.module.scss';

// composnat SearchBar
const SearchBar = () => (
    <div className={style.searchBar__container}>
        <Input
            size="large"
            placeholder="Recherche par langue"
            suffix={<SearchOutlined />}
        />
    </div>
);
export default SearchBar;