var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller.js');
const productController = require('../controller/products.controller.js');
var upload = require('../Utils/upload.js');

//HTTP Verbs : Post - Create, Get - Read, Put - Update, Delete

router.post('/users',userController.create);

router.post('/products', upload.single('articleImage'), productController.create);

router.get('/users/:email',userController.readOne);

router.get('/products',productController.readAll);

router.delete('/products/:id',productController.deleteOne);

// router.put('/providers/:id',mainController.update);

// router.delete('/providers',mainController.deleteAll);

module.exports = router;