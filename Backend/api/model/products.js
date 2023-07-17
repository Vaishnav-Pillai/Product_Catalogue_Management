const mongoose = require('mongoose');
const { productSchema } = require('../schemas/product.schema.js');

//Create Product model

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }