const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('domesticatedProducts').find();
    result.toArray().then((domesticatedProducts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(domesticatedProducts);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('domesticatedProducts').find({_id: userId });
    result.toArray().then((domesticatedProducts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(domesticatedProducts[0]);
    });
};

const createDomesticatedProduct = async (req,res) => {
    const domesticatedProduct = {
        species: req.body.species,
        genus: req.body.genus,
        domesticationTimerange:req.body.domesticationTimerange,
        description:req.body.description,
        AverageYeild_Acre:req.body.AverageYeild_Acre,
        origins: req.body.origins,
        commonName: req.body.commonName,
        AverageDevelopmentPiriod_Months: req.body.AverageDevelopmentPiriod_Months
    }
    const response = await mongodb.getDatabase().db().collection('domesticatedProducts').insertOne(domesticatedProduct);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.err || 'some error occurred while updating the domesticatedProduct.');
    }
};

const updateDomesticatedProduct = async (req, res) => {
    const domesticatedProductId = new ObjectId(req.params.id);
    const domesticatedProduct = {
        species: req.body.species,
        genus: req.body.genus,
        domesticationTimerange:req.body.domesticationTimerange,
        description:req.body.description,
        AverageYeild_Acre:req.body.AverageYeild_Acre,
        origins: req.body.origins,
        commonName: req.body.commonName,
        AverageDevelopmentPiriod_Months: req.body.AverageDevelopmentPiriod_Months
    }
    const response = await mongodb.getDatabase().db().collection('domesticatedProducts').replaceOne({ _id: domesticatedProductId }, domesticatedProduct);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.err || 'some error occurred while updating the domesticatedProduct.');
        console.error('MongoDB Error:', response.err);
    }
};

const deleterDomesticatedProduct = async (req, res) => {
    const domesticatedProductId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('domesticatedProducts').deleteOne({ _id: domesticatedProductId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.err || 'some error occurred while updating the domesticatedProduct.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createDomesticatedProduct,
    updateDomesticatedProduct,
    deleterDomesticatedProduct
}