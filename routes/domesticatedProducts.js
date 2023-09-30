const express = require('express');
const router = express.Router();

const domesticatedProductsController = require('../controllers/domesticatedProducts');
const validation = require('../middleware/validate');

router.get('/', domesticatedProductsController.getAll);

router.get('/:id', domesticatedProductsController.getSingle);

router.post('/', validation.saveDomesticatedProduct, domesticatedProductsController.createDomesticatedProduct);

router.put('/:id', validation.saveDomesticatedProduct, domesticatedProductsController.updateDomesticatedProduct);

router.delete('/:id',domesticatedProductsController.deleterDomesticatedProduct);

module.exports = router;