/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file is used to manage connection to our database */

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://affordly:affordly123@cluster0.lzi2l.mongodb.net/affordly?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = {
    Post: require('../Models/postModel'),
};
