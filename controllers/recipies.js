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

const createRecipie = async (req,res) => {

    const recipie = {
        name: req.body.name,
        domesticatedProducts: req.body.domesticatedProducts,
        instructions:req.body.instructions
    };

    const response = await mongodb.getDatabase().db().collection('recipies').insertOne(recipie);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.err || 'some error occurred while adding the recipie.');
    }
};

const updateRecipie = async (req, res) => {
    const recipieId = new ObjectId(req.params.id);
    const recipie = {
        name: req.body.name,
        domesticatedProducts: req.body.domesticatedProducts,
        instructions:req.body.instructions
    };

    const response = await mongodb.getDatabase().db().collection('recipies').replaceOne({ _id: recipieId }, recipie);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.err || 'some error occurred while updating the recipie.');
    }
};

const deleteRecipie = async (req, res) => {
    const recipieId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('recipies').deleteOne({ _id: recipieId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.err || 'some error occurred while updating the recipie.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createRecipie,
    updateRecipie,
    deleteRecipie
}