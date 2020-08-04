/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file manages the internal endpoint based routing after /api 
 and calls appropriate functions of the controller to perform functions */

const express = require('express');
const router = express.Router();

const commentController = require('../Controllers/commentController');

router.get('/',getAllComments);    //Route to fetch all posts in the database
router.post('/postComment',createComment);    //Route to get a particular post by its id

function createComment(req, res, next) {
	console.log("Here");
    console.log(req.body);
    commentController.create(req.body , res)
        .then(() => res.status(201).json({ message: 'Comment created successfully' }))
        .catch(err => res.status(406).json({success : false,error: err.message}));
}

function getAllComments(req, res, next) {
    commentController.findAll()
        .then(post => res.json(post).status(200))
        .catch(err => res.status(404).json({success : false,error: err.message}));
}

module.exports = router;
