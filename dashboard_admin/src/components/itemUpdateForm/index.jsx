
import PropTypes from 'prop-types';
import styles from './itemUpdateForm.module.css';
import { LinkIcon } from '../icons';

const ItemUpdateForm = ({ updatedItem, handleUpdatedItemChange, updateItem, addItemDisabled }) => {
  return (
    <>
      <div className={styles.update_area}>
        <div>
          <fieldset>
            <legend>Código</legend>
            <input
              type="number"
              name="id"
              value={updatedItem.id}
              onChange={handleUpdatedItemChange}
              required
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Nome</legend>
            <input
              type="text"
              name="name"
              value={updatedItem.name}
              onChange={handleUpdatedItemChange}
              required
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Descrição</legend>
            <input
              type="text"
              name="description"
              value={updatedItem.description}
              onChange={handleUpdatedItemChange}
              required
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Preço</legend>
            <input
              type="number"
              name="price"
              value={updatedItem.price}
              onChange={handleUpdatedItemChange}
              required
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Categoria</legend>
            <input
              type="text"
              name="category"
              value={updatedItem.category}
              onChange={handleUpdatedItemChange}
              required
            />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend><LinkIcon className={styles.Icon_link_image} /> Link da Imagem</legend>
            <input
              type="text"
              name="image"
              value={updatedItem.image}
              onChange={handleUpdatedItemChange}
              required
            />
          </fieldset>
        </div>
        <button onClick={updateItem} disabled={addItemDisabled} className={styles.btn_update}>
          Atualizar
        </button>
      </div>
    </>
  );
}

ItemUpdateForm.propTypes = {
  updatedItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleUpdatedItemChange: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  addItemDisabled: PropTypes.bool.isRequired,
};

export default ItemUpdateForm;
