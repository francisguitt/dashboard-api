import express from 'express';
export const routes = express.Router();

// import { cache } from '../cache/index.js';
// const expires = 60 * 60 * 1000;
// import { cache } from '../cache/index.js';
routes.use(express.json());

import { GetItens } from '../controllers/getItens.js';
import { GetById } from '../controllers/getItensById.js';
import { CreateItens } from '../controllers/createItens.js';
import { UpdateItens } from '../controllers/updateItens.js';
import { DropItens } from '../controllers/dropItens.js';
import { GetByCategory } from '../controllers/getByCategory.js';

routes.get('/itens', GetItens);
routes.get('/itens/:id', GetById);
routes.get('/itens/categoria/:category', GetByCategory);
routes.post('/itens', CreateItens);
routes.put('/itens/:id', UpdateItens);
routes.delete('/itens/:id', DropItens);

