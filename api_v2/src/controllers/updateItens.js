import admin from "../instances/index.js";
import { productsSchima } from "../validations/index.js";
const db = admin.firestore();
export const UpdateItens = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, category, image } = req.body;
        const docRef = db.collection('products').doc(id);
        const docSnapshot = await docRef.get();

        if (!docSnapshot.exists) {
            res.status(404).json({ error: 'Item não encontrado!' });
            return;
        }

        await productsSchima.validate({
            id,
            name,
            description,
            price,
            category,
            image
            
        })
       
        await docRef.update({
         id,   name, description, price, category, image
        });
        res.json({ message: 'Item atualizado com sucesso!'});
        console.log(({ message: 'Item atualizado com sucesso!' }));

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}