
// import { useEffect, useState } from 'react';
// import styles from './screen.module.css';
// import axios from 'axios';
// import Header from '../header';
// import ItemList from '../itemList';
// import ItemCreateForm from '../itemCreateForm';
// import ItemUpdateForm from '../itemUpdateForm';
// import SearchResult from '../searchResult';
// import { Footer } from '../footer';
// import { DataBase } from '../icons';


// const Screen = () => {


//     const API_BASE_URL = 'https://api-v2-384e.onrender.com';
//     const [itens, setItens] = useState([]);
//     const [fieldregister, setFieslRegister] = useState(false);
//     const [datalist, setDataList] = useState(false);
//     const [searchItemId, setSearchItemId] = useState('');
//     const [searchedItem, setSearchedItem] = useState({});
//     const [iconSearchResult, setIconSearchResult] = useState(false);
//     const [newItem, setNewItem] = useState({ id: 0, name: '', description: '', price: '', category: '', image: '' });
//     const [selectedItemId, setSelectedItemId] = useState('');
//     const [updatedItem, setUpdatedItem] = useState({ id: 0, name: '', description: '', price: '', category: '', image: '' });
//     const [addItemDisabled, setAddItemDisabled] = useState(true);

//     useEffect(() => {
//         fetchItens();
//     }, []);

//     const fetchItens = async () => {
//         try {
//             const response = await axios.get(`${API_BASE_URL}/itens/`);
//             setItens(response.data);
//         } catch (error) {
//             console.error('Erro ao obter os itens:', error);
//         }
//     };

//     const searchItem = async () => {
//         try {
//             const response = await axios.get(`${API_BASE_URL}/itens/${searchItemId}`);
//             const item = response.data;
//             setSearchedItem(item);
//         } catch (error) {
//             console.error('Erro ao buscar o item:', error);
//         }
//     };




//     const createItem = async () => {
//         try {
//             const response = await axios.post(`${API_BASE_URL}/itens`, newItem);
//             const createdItem = response.data;
//             setItens([...itens, createdItem]);
//             setNewItem({ id: '', name: '', description: '', price: '', category: '', image: '' });
//             setAddItemDisabled(true);
//             fetchItens();
//         } catch (error) {
//             console.error('Erro ao criar o item:', error);
//             alert('Erro ao criar o item:', error);
//         }
//     };

//     const deleteItem = async (id) => {
//         try {
//             await axios.delete(`${API_BASE_URL}/itens/${id}`);
//             const updatedItems = itens.filter((item) => item.id !== id);
//             setItens(updatedItems);
//         } catch (error) {
//             alert.error('Erro ao excluir o item:', error.response.data);
//             console.error('Erro ao excluir o item:', error.response.data);
//         }
//     };

//     const updateItem = async () => {
//         try {
//             // Converta o valor numérico para string antes de chamar o componente ItemUpdateForm
//             const updatedPrice = updatedItem.price;
//             const updatedItemWithPriceAsString = {
//                 ...updatedItem,
//                 price: updatedPrice,
//             };
//             await axios.put(`${API_BASE_URL}/itens/${updatedItem.id}`, updatedItemWithPriceAsString);
//             const updatedItems = itens.map((item) => (item.id === updatedItem.id ? updatedItem : item));
//             setItens(updatedItems);
//             alert('Produto atualizado com sucesso !');
//             setSelectedItemId('');
//             setUpdatedItem({ id: '', name: '', description: '', price: '', category: '', image: '' });
//         } catch (error) {
//             console.error('Erro ao atualizar o item:', error);
//             alert('Erro ao atualizar o item', error)
//         }
//     };
//     // ...
//     useEffect(() => {
//         const findItemById = () => {
//             const selectedItem = itens.find((item) => item.id === selectedItemId);
//             if (selectedItem) {
//                 setUpdatedItem(selectedItem);
//             }
//         };

//         findItemById();
//     }, [selectedItemId, itens]);

//     const handleNewItemChange = (e) => {
//         const { name, value } = e.target;
//         setNewItem((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleUpdatedItemChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedItem((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };
//     console.log(updateItem)
//     useEffect(() => {
//         const isAddItemDisabled = Object.values(newItem).some((value) => value === '');
//         setAddItemDisabled(isAddItemDisabled);
//     }, [newItem]);

//     const showHandleDataList = () => {
//         if (!datalist) {
//             setDataList(true);
//         } else {
//             setDataList(false);
//         }
//     };

//     const showListProducts = () => {
//         if (!fieldregister) {
//             setFieslRegister(true);
//         } else {
//             setFieslRegister(false);
//         }
//     };

//     const showHandleSearchResult = () => {
//         if (!iconSearchResult) {
//             setIconSearchResult(true);
//         } else {
//             setIconSearchResult(false);
//         }
//     };

//     return (
//         <>
//             <Header
//                 showListProducts={showListProducts}
//                 showHandleDataList={showHandleDataList}
//                 showHandleSearchResult={showHandleSearchResult}
//                 searchItemId={searchItemId}
//                 setSearchItemId={setSearchItemId}
//                 searchItem={searchItem}
//             />
//             <div className={styles.main}>
//                 {datalist && (
//                     <div className={styles.list_products}>
//                         <DataBase className={styles.Icon_data_base} />
//                         <h4>Itens</h4>
//                     </div>
//                 )}
//                 {!iconSearchResult && searchedItem.id && (
//                     <SearchResult
//                         searchedItem={searchedItem}
//                         deleteItem={deleteItem}
//                         setSelectedItemId={setSelectedItemId}
//                     />
//                 )}
//                 {datalist && (
//                     <ItemList items={itens} deleteItem={deleteItem} setSelectedItemId={setSelectedItemId} />
//                 )}
//                 <div className={styles.wrapper_item_create_form_item_update_form}>
//                     {fieldregister && (
//                         <ItemCreateForm
//                             newItem={newItem}
//                             handleNewItemChange={handleNewItemChange}
//                             createItem={createItem}
//                             addItemDisabled={addItemDisabled}
//                         />
//                     )}

//                     {selectedItemId && (
//                         <ItemUpdateForm
//                             updatedItem={updatedItem}
//                             handleUpdatedItemChange={handleUpdatedItemChange}
//                             updateItem={updateItem}
//                             addItemDisabled={false}
//                         />
//                     )}
//                 </div>
//             </div>

//             <Footer />
//         </>
//     );
// };

// export default Screen;


import { useEffect, useState } from 'react';
import * as I from '../icons';
import styles from './screen.module.css';
import axios from 'axios';
import Header from '../header';
import ItemList from '../itemList';
import ItemCreateForm from '../itemCreateForm';
import ItemUpdateForm from '../itemUpdateForm';
import SearchResult from '../searchResult';
import { Footer } from '../footer';
import { DataBase } from '../icons';
import { ArrowLeft, ArrowRight } from '../../icons';

const Screen = () => {
    const API_BASE_URL = 'https://api-v2-384e.onrender.com';
    const [itens, setItens] = useState([]);
    const [fieldregister, setFieslRegister] = useState(false);
    const [datalist, setDataList] = useState(false);
    const [searchItemId, setSearchItemId] = useState('');
    const [searchedItem, setSearchedItem] = useState({});
    const [iconSearchResult, setIconSearchResult] = useState(false);
    const [newItem, setNewItem] = useState({ id: 0, name: '', description: '', price: '', category: '', image: '' });
    const [selectedItemId, setSelectedItemId] = useState('');
    const [updatedItem, setUpdatedItem] = useState({ id: 0, name: '', description: '', price: '', category: '', image: '' });
    const [addItemDisabled, setAddItemDisabled] = useState(true);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        fetchItens();
    }, [currentPage]);

    const fetchItens = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/itens/`);
            const allItems = response.data;

            // Calculate the start and end indices for the current page
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            // Get the items for the current page
            const itemsToShow = allItems.slice(startIndex, endIndex);

            setItens(itemsToShow);
        } catch (error) {
            console.error('Erro ao obter os itens:', error);
        }
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const searchItem = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/itens/${searchItemId}`);
            const item = response.data;
            setSearchedItem(item);
        } catch (error) {
            console.error('Erro ao buscar o item:', error);
        }
    };




    const createItem = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/itens`, newItem);
            const createdItem = response.data;
            setItens([...itens, createdItem]);
            setNewItem({ id: '', name: '', description: '', price: '', category: '', image: '' });
            setAddItemDisabled(true);
            fetchItens();
        } catch (error) {
            console.error('Erro ao criar o item:', error);
            alert('Erro ao criar o item:', error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/itens/${id}`);
            const updatedItems = itens.filter((item) => item.id !== id);
            setItens(updatedItems);
        } catch (error) {
            alert.error('Erro ao excluir o item:', error.response.data);
            console.error('Erro ao excluir o item:', error.response.data);
        }
    };

    const updateItem = async () => {
        try {
            // Converta o valor numérico para string antes de chamar o componente ItemUpdateForm
            const updatedPrice = updatedItem.price;
            const updatedItemWithPriceAsString = {
                ...updatedItem,
                price: updatedPrice,
            };
            await axios.put(`${API_BASE_URL}/itens/${updatedItem.id}`, updatedItemWithPriceAsString);
            const updatedItems = itens.map((item) => (item.id === updatedItem.id ? updatedItem : item));
            setItens(updatedItems);
            alert('Produto atualizado com sucesso !');
            setSelectedItemId('');
            setUpdatedItem({ id: '', name: '', description: '', price: '', category: '', image: '' });
        } catch (error) {
            console.error('Erro ao atualizar o item:', error);
            alert('Erro ao atualizar o item', error)
        }
    };
    // ...
    useEffect(() => {
        const findItemById = () => {
            const selectedItem = itens.find((item) => item.id === selectedItemId);
            if (selectedItem) {
                setUpdatedItem(selectedItem);
            }
        };

        findItemById();
    }, [selectedItemId, itens]);

    const handleNewItemChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdatedItemChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    console.log(updateItem)
    useEffect(() => {
        const isAddItemDisabled = Object.values(newItem).some((value) => value === '');
        setAddItemDisabled(isAddItemDisabled);
    }, [newItem]);

    const showHandleDataList = () => {
        if (!datalist) {
            setDataList(true);
        } else {
            setDataList(false);
        }
    };

    const showListProducts = () => {
        if (!fieldregister) {
            setFieslRegister(true);
        } else {
            setFieslRegister(false);
        }
    };

    const showHandleSearchResult = () => {
        if (!iconSearchResult) {
            setIconSearchResult(true);
        } else {
            setIconSearchResult(false);
        }
    };

    return (
        <>
            <Header
                showListProducts={showListProducts}
                showHandleDataList={showHandleDataList}
                showHandleSearchResult={showHandleSearchResult}
                searchItemId={searchItemId}
                setSearchItemId={setSearchItemId}
                searchItem={searchItem}
            />
            <div className={styles.main}>
                {datalist && (
                    <div className={styles.list_products}>
                        <DataBase className={styles.Icon_data_base} />
                        <h4>Itens</h4>
                    </div>
                )}
                {!iconSearchResult && searchedItem.id && (
                    <SearchResult
                        searchedItem={searchedItem}
                        deleteItem={deleteItem}
                        setSelectedItemId={setSelectedItemId}
                    />
                )}
                {datalist && (
                    <ItemList items={itens} deleteItem={deleteItem} setSelectedItemId={setSelectedItemId} />
                )}
                <div className={styles.wrapper_item_create_form_item_update_form}>
                    {fieldregister && (
                        <ItemCreateForm
                            newItem={newItem}
                            handleNewItemChange={handleNewItemChange}
                            createItem={createItem}
                            addItemDisabled={addItemDisabled}
                        />
                    )}

                    {selectedItemId && (
                        <ItemUpdateForm
                            updatedItem={updatedItem}
                            handleUpdatedItemChange={handleUpdatedItemChange}
                            updateItem={updateItem}
                            addItemDisabled={false}
                        />
                    )}
                </div>
            </div>

            <Footer />

            {datalist && (
                <div className={styles.pagination_prev_next}>
                    <div className={styles.area_buttons_pagination_prev_next}>
                        <button onClick={prevPage} disabled={currentPage === 1} >
                            <ArrowLeft className={styles.icons} />
                            <strong style={{ color: "#333" }}>anterior</strong>
                        </button>
                        <button onClick={nextPage} disabled={itens.length < itemsPerPage}>
                            <ArrowRight className={styles.icons} />
                            <strong style={{ color: "#333" }}>próximo</strong>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Screen;
