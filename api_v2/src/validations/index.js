
import * as yup from 'yup';
export const productsSchima = yup.object().shape({
    id: yup.number().positive().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.string().required(),
    image: yup.string().required()
});