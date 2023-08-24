import PropTypes from 'prop-types';
import styles from './itemList.module.css';
import { Edit, Trash } from '../icons';

//lista os items do banco de dados
const ItemList = ({ items, deleteItem, setSelectedItemId }) => {
  return (
    <div className={styles.list}>
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>R$ {item.price}</td>
              <td>{item.category}</td>
              <td>
                <div className={styles.imageUrlCenter}>
                  <img src={item.image} alt='imagem do produto' width={55} className={styles.imageUrl} />
                </div>
              </td>
              <td>
                <div className={styles.td_btns_area}>
                  <button onClick={() => deleteItem(item.id)}>
                    <Trash className={styles.erase} />
                  </button>

                  <button onClick={() => setSelectedItemId(item.id)}>
                    <Edit className={styles.edit} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
  setSelectedItemId: PropTypes.func.isRequired,
};

export default ItemList;

