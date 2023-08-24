const fetch = require('node-fetch');
const sheetDBEndpoint = `${process.env.API_KEY}`;
require('dotenv').config();
const DeletItens = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(`${sheetDBEndpoint}/id/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            res.json({ message: 'Item excluído com sucesso.' });
        } else {
            res.status(500).json({ error: 'Erro ao excluir o item.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o item.' });
    }
}

module.exports = DeletItens;
