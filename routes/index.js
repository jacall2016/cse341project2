const router = require('express').Router();

router.get('/',(req,res) => { res.send('Hello World')});

router.use('/recipies', require('./recipies'));
router.use('/domesticatedProducts', require('./domesticatedProducts'));

module.exports = router;