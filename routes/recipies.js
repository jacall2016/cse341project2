const express = require('express');
const router = express.Router();

const recipiesController = require('../controllers/recipies');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', recipiesController.getAll);
router.get('/:id', recipiesController.getSingle);
router.post('/', isAuthenticated, validation.saveRecipie, recipiesController.createRecipie);
router.put('/:id', isAuthenticated, validation.saveRecipie, recipiesController.updateRecipie);
router.delete('/:id', isAuthenticated, recipiesController.deleteRecipie);

module.exports = router;