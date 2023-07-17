const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    "id": {type: mongoose.ObjectId, ref: 'User', required: true},
    "name": {type: String, required: true},
    "description": {type: String, required: true},
    "tagline": {type: String, required: true},
    "price": {type: Number, required: true},
    "articleImage": {type: String, required: true},
    "source": {type: String, required: true}
});

module.exports = {productSchema}