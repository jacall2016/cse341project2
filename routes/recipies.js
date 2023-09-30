const express = require('express');
const router = express.Router();

const recipiesController = require('../controllers/recipies');

router.get('/', recipiesController.getAll);

router.get('/:id', recipiesController.getSingle);

router.post('/', recipiesController.createRecipie);

router.put('/:id', recipiesController.updateRecipie);


router.delete('/:id',recipiesController.deleteRecipie);

module.exports = router;