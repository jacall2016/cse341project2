const express = require('express');
const router = express.Router();

const domesticatedProductsController = require('../controllers/domesticatedProducts');

router.get('/', domesticatedProductsController.getAll);

router.get('/:id', domesticatedProductsController.getSingle);

module.exports = router;