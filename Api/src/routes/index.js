const express = require('express');
const router = express.Router();
const cacheService = require('express-api-cache');
const GetItensById = require('../controllers/getItensById');
const UpdateItens = require('../controllers/updateItens');
const CreateItens = require('../controllers/createItens');
const DeletItens = require('../controllers/deleteItens');
const cache = cacheService.cache;
const GetItens = require('../controllers/getItens');

router.get('/itens', cache('10 days'), GetItens);
router.get('/itens/:id', cache('10 days'), GetItensById);
router.post('/itens/:id', CreateItens); 
router.put('/itens/:id', UpdateItens); 
router.delete('/itens/:id', DeletItens) 

module.exports = router;