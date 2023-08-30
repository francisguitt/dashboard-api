


import admin from "../instances/index.js";
const db = admin.firestore();

export const GetById = async (req, res) => {
    try {
        const { id } = req.params;
        const docRef = db.collection('products').doc(id);
        const docSnapshot = await docRef.get();

        if (!docSnapshot.exists) {
            res.status(404).json({ error: 'Item não encontrado!' });
            return;
        }

        const data = docSnapshot.data();

        // Configurar o cabeçalho Cache-Control para permitir o cache por 12 horas e revalidação
        res.setHeader('Cache-Control', 'public, max-age=600, must-revalidate'); // 43200 segundos = 12 horas

        res.json({ id: docSnapshot.id, ...data });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
