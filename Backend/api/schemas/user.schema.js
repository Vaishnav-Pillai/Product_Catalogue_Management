const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    "firstname": {type: String, required: true},
    "lastname": {type: String, required: true},
    "uname": {type: String, required: true},
    "email": {type: String, required: true, unique: true},
    "password": {type: String, required: true}
});

module.exports = {userSchema}