var Product = require('../db/productdb');
const { ObjectId } = require('mongodb');

function isEmptyList(obj){
    return(!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

function handleError(res,error){
    res.status(200);
    res.send('Something went wrong. \n'+error);
}

//CRUD

//uri1: /api/products
//uri2: /api/products/id

module.exports.create = function(req,res){

    try{
        
        var product = req.body;

        const fileObj = {
            id: product.id,
            name: product.name,
            description: product.description,
            tagline: product.tagline,
            price: product.price,
            articleImage: req.file.originalname,
            source: product.source
        }

        Product.create(fileObj)
            .then( result => {
                res.status(201);
                res.send('Added '+result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.readAll = function(req,res){

    try{
        Product.find()
            .then( result => {
                if(isEmptyList(result)){
                    res.status(400);
                    res.send("List is Empty.");
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res,error));
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.deleteOne = function(req,res){
    
    try{

        Product.findOneAndDelete( {'_id':(req.params.id)})
            .then( result => {
                if(isEmptyList(result)){
                    res.status(400);
                    res.send("List is Empty.");
                }

                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res,error))

    }
    catch(e){
        handleError(res,e)
    }
}