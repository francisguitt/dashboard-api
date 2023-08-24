
import admin from "../instances/index.js";
import { productsSchima } from "../validations/index.js";
const db = admin.firestore();
export const CreateItens = async (req, res) => {
    try {
        const { id, name, description, price, category, image } = req.body;
        await productsSchima.validate({
            id,
            name,
            description,
            price,
            category,
            image
        });

        await db.collection('products').doc(id).set({
            id,
            name,
            description,
            price,
            category,
            image
        });
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

