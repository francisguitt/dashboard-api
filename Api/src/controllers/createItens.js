

const fetch = require('node-fetch');
const sheetDBEndpoint = `${process.env.API_KEY}`;
require('dotenv').config();
const CreateItens = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, image } = req.body;

    try {
        const response = await fetch(sheetDBEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, name, description, price, category, image }),
        });

        if (response.ok) {
            const data = await response.json();
            res.json(data);
        } else {
            res.status(500).json({ error: 'Erro ao criar o item.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o item.' });
    }
}

module.exports = CreateItens;