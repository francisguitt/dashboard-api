

import PropTypes from 'prop-types';
import styles from './searchResult.module.css';
import { Edit, Trash } from '../icons';
// // busca por id
const SearchResult = ({ searchedItem, deleteItem, setSelectedItemId }) => {

  return (
    <>
      <div className={styles.search_result}>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Imagem do produto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{searchedItem.id}</td>
              <td>{searchedItem.name}</td>
              <td>{searchedItem.description}</td>
              <td>R$ {searchedItem.price}</td>
              <td>{searchedItem.category}</td>
              <td>
                <div className={styles.imageUrlCenter}>
                  <img src={searchedItem.image}
                    alt="imagem do produto" width={55}
                    className={styles.imageUrl} />
                </div>
              </td>
              <td>
                <div className={styles.td_btns_area}>
                  <button onClick={() => deleteItem(searchedItem.id)}>
                    <Trash className={styles.erase} />
                  </button>
                  <button onClick={() => setSelectedItemId(searchedItem.id)}>
                    <Edit className={styles.edit} />
                  </button>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

}
SearchResult.propTypes = {
  searchedItem: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  setSelectedItemId: PropTypes.func.isRequired,
};
export default SearchResult;


