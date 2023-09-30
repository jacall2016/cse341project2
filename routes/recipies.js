const express = require('express');
const router = express.Router();

const recipiesController = require('../controllers/recipies');
const validation = require('../middleware/validate');

router.get('/', recipiesController.getAll);

router.get('/:id', recipiesController.getSingle);

router.post('/', validation.saveRecipie, recipiesController.createRecipie);

router.put('/:id', validation.saveRecipie, recipiesController.updateRecipie);


router.delete('/:id',recipiesController.deleteRecipie);

module.exports = router;