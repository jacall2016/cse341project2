const express = require('express');
const router = express.Router();

const domesticatedProductsController = require('../controllers/domesticatedProducts');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', domesticatedProductsController.getAll);
router.get('/:id', domesticatedProductsController.getSingle);
router.post('/', isAuthenticated, validation.saveDomesticatedProduct, domesticatedProductsController.createDomesticatedProduct);
router.put('/:id', isAuthenticated, validation.saveDomesticatedProduct, domesticatedProductsController.updateDomesticatedProduct);
router.delete('/:id', isAuthenticated, domesticatedProductsController.deleterDomesticatedProduct);

module.exports = router;