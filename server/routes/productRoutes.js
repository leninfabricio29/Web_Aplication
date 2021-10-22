const express = require('express');
const router = express.Router();

const { list, read, create, remove, productById , photo } = require('../controllers/productControllers');

// list 
router.get('/products', list);
router.post('/create', create)
router.get('/photo/:productId', photo)
router.get('/:productId', read)
router.delete('/:productId', remove)
router.param("productId", productById);
module.exports = router;