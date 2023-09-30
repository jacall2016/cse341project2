const express = require('express');
const router = express.Router();

const domesticatedProductsController = require('../controllers/domesticatedProducts');

router.get('/', domesticatedProductsController.getAll);

router.get('/:id', domesticatedProductsController.getSingle);

router.post('/', domesticatedProductsController.createDomesticatedProduct);

router.put('/:id', domesticatedProductsController.updateDomesticatedProduct);

router.delete('/:id',domesticatedProductsController.deleterDomesticatedProduct);

module.exports = router;