const sheetDBEndpoint = `${process.env.API_KEY}`;
const fetch = require('node-fetch');
require('dotenv').config();
const getItens = async (req, res) => {
 
    try {
        const response = await fetch(sheetDBEndpoint);
        if (response.ok) {
            const data = await response.json();
            res.json(data);
        } else {
            res.status(500).json({ error: 'Erro ao obter os itens.' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os itens.' });
        console.log('Error', error)
    }
}

module.exports = getItens;