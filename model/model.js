const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', () => console.log('connected locally'));

const Schema = new mongoose.Schema({
    login: String,
    password: String
});

const model = mongoose.model('users', Schema);

module.exports = model;