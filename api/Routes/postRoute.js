/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file manages the internal endpoint based routing after /api 
 and calls appropriate functions of the controller to perform functions */


const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/',getAllPosts);    //Route to fetch all posts in the database
router.get('/post',getPostbyId);    //Route to get a particular post by its id
router.get('/activePosts',getAllActivePosts); //Route to fetch all active posts in the database
router.post('/createPost', createPost); //Route to create a new post
router.put('/post', markAsSold);    //Route to mark a post as sold (used by payment page)


module.exports = router;

function createPost(req, res, next) {
    console.log(req.body);
    postController.create(req.body , res)
        .then(() => res.status(201).json({ message: 'Post created successfully' }))
        .catch(err => res.status(406).json({success : false,error: err.message}));
}

function getAllPosts(req, res, next) {
    postController.findAll()
        .then(post => res.json(post).status(200))
        .catch(err => res.status(404).json({success : false,error: err.message}));
}

function getAllActivePosts(req, res, next) {
    postController.findAllActive()
        .then(post => res.json(post))
        .catch(err => res.status(404).json({success : false,error: err.message}));
}

function getPostbyId(req, res, next) {
    postController.findById(req.query.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({success : false,error: err.message}));
}

function markAsSold(req, res, next) {
    postController.updateSold(req.query.id)
        .then(() => res.status(200).json({ message: 'Post marked as inactive' }))
        .catch(err => res.status(406).json({success : false,error: err.message}));
}