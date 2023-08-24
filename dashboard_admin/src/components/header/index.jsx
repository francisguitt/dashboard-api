
import styles from './header.module.css';
import PropTypes from 'prop-types';
import { RegisterProducts, ListProducts, FielterIcon } from '../icons';

const Header = ({ showListProducts, showHandleDataList, showHandleSearchResult, searchItemId, setSearchItemId, searchItem }) => {
  return (
    <div className={styles.header}>
      <div className={styles.menu_header}>
        <div className={styles.show_register_products}>
          <button onClick={showListProducts}>
            <RegisterProducts className={styles.IconRegister} />
          </button>
          Cadastrar
        </div>
        <div className={styles.show_list_products}>
          <button onClick={showHandleDataList}>
            <ListProducts className={styles.IconProducts} />
          </button>
          Listar
        </div>
      </div>
      <div className={styles.search}>
        <button onClick={showHandleSearchResult} style={{ backgroundColor: "transparent" }}>
          <FielterIcon className={styles.filterIcon} />
        </button>
        <input
          type="text"
          name="searchItemId"
          value={searchItemId}
          onChange={(e) => setSearchItemId(e.target.value)}
          placeholder="Digite o código do produto"
          required
        />
        <button onClick={searchItem} className={styles.btn_search}>Buscar</button>
      </div>
      <div className={styles.area_admin}>
        <div className={styles.area_title_admin}>
          <h2>Painel Administrador</h2>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  showListProducts: PropTypes.func.isRequired,
  showHandleDataList: PropTypes.func.isRequired,
  showHandleSearchResult: PropTypes.func.isRequired,
  searchItemId: PropTypes.string.isRequired,
  setSearchItemId: PropTypes.func.isRequired,
  searchItem: PropTypes.func.isRequired,
};

export default Header;