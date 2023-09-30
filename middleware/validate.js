const validator = require('../helpers/validate');

const saveRecipie = (req, res, next) => {
    const validationRule = {
            name: 'required|string',
            'domesticatedProducts.*.product_id': 'required|string',
            'domesticatedProducts.*.quantity_grams': 'required|string',
            instructions: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message:'validation failed',
                data: err
            })
        } else {
            next();
        }
    });
};

const saveDomesticatedProduct = (req, res, next) => {
    const validationRule = {
        species: 'required|string',
        genus: 'required|string',
        'domesticationTimerange.oldest_YA': 'required|integer',
        'domesticationTimerange.youngest_YA': 'required|integer',
        'description.inches':'required|string',
        'description.lb':'required|string',
        'AverageYeild_Acre.lowEstimate':'required|integer',
        'AverageYeild_Acre.highEstimate':'required|integer',
        origins: 'required|array',
        'origins.*':'required|string',
        commonName: 'required|string',
        AverageDevelopmentPiriod_Months: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message:'validation failed',
                data: err
            })
        } else {
            next();
        }
    });
};

module.exports = {
    saveRecipie,
    saveDomesticatedProduct
}