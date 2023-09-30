const express = require('express');
const router = express.Router();

const recipiesController = require('../controllers/recipies');

router.get('/', recipiesController.getAll);

router.get('/:id', recipiesController.getSingle);

module.exports = router;