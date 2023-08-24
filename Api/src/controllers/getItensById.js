const sheetDBEndpoint = `${process.env.API_KEY}`;
const fetch = require('node-fetch');
require('dotenv').config();
const GetItensById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(`${sheetDBEndpoint}/id/${id}`);
        if (response.ok) {
            const data = await response.json();
            res.json(data);
        } else {
            res.status(500).json({ error: 'Erro ao obter o item.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o item.' });
    }
}

module.exports = GetItensById;