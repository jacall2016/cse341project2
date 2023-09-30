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

module.exports = {
    getAll,
    getSingle
}