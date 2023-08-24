import admin from '../instances/index.js';
const db = admin.firestore();
export const DropItens = async (req, res) => {
    try {
        const { id } = req.params;
        const docRef = db.collection('products').doc(id);
        await docRef.delete();
        res.json({ message: " iten apagado com sucesseo!" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}