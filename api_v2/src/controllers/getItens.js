

import admin from "../instances/index.js";
const db = admin.firestore();

export const GetItens = async (req, res) => {
    try {
        const snapshot = await db.collection('products').get();
        const documents = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            documents.push({ id: doc.id, ...data });
        });

        // Configurar o cabeçalho Cache-Control para permitir o cache por 12 horas e revalidação
        // 43200 segundos = 12 horas
        res.setHeader('Cache-Control', 'public, max-age=60, must-revalidate'); 

        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
