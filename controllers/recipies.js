const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('recipies').find();
    result.toArray().then((recipies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(recipies);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('recipies').find({_id: userId });
    result.toArray().then((recipies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(recipies[0]);
    });
};

module.exports = {
    getAll,
    getSingle
}