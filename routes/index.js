const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tag=['Hello world']
    res.send('Hello World');
});


router.use('/recipies', require('./recipies'));
router.use('/domesticatedProducts', require('./domesticatedProducts'));

module.exports = router;