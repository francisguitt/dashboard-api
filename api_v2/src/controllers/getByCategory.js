
import admin from '../instances/index.js';

const db = admin.firestore();

export const GetByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const querySnapshot = await db.collection('products').where('category', '==', category).get();

        if (querySnapshot.empty) {
            res.status(404).json({ error: 'Nenhum item encontrado para essa categoria!' });
            return;
        }

        const products = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            products.push({ id: doc.id, ...data });
        });

        // Configurar o cabeçalho Cache-Control para permitir o cache por 12 horas e revalidação
        res.setHeader('Cache-Control', 'public, max-age=600, must-revalidate'); // 43200 segundos = 12 horas

        res.json(products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





