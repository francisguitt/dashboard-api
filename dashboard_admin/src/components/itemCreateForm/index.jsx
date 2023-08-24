

import PropTypes from 'prop-types';
import styles from './itemCreateForm.module.css';
import { LinkIcon } from '../icons';

const ItemCreateForm = ({ newItem, handleNewItemChange, createItem, addItemDisabled }) => {
    return (
        <>
            <div className={styles.register_area}>
                <div>
                    <fieldset>
                        <legend>Código</legend>
                        <input
                            type="number"
                            name="id"
                            value={newItem.id}
                            onChange={handleNewItemChange}
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
                            value={newItem.name}
                            onChange={handleNewItemChange}
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
                            value={newItem.description}
                            onChange={handleNewItemChange}
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
                            value={newItem.price}
                            onChange={handleNewItemChange}
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
                            value={newItem.category}
                            onChange={handleNewItemChange}
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
                            value={newItem.image}
                            onChange={handleNewItemChange}
                            required
                        />
                    </fieldset>
                </div>
                <button onClick={createItem} disabled={addItemDisabled} className={styles.btn_register}>
                    Cadastrar
                </button>

            </div>

        </>
    );
}

ItemCreateForm.propTypes = {
    newItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,

    handleNewItemChange: PropTypes.func.isRequired,
    createItem: PropTypes.func.isRequired,
    addItemDisabled: PropTypes.bool.isRequired,
    nameButtonUpdate: PropTypes.bool.isRequired,
};

export default ItemCreateForm;

