/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file has all the controller logic and gets invoked from the routes based on appropriate endpoint */

const db = require('../_helpers/db');
const Comment = db.Comment;
const mongoose = require("mongoose");

async function create(commentParams, res){
	if(!commentParams.name) throw new Error("Name not provided");
	else if(!commentParams.message) throw new Error("Comment not provided");
	
	else {
		const newComment = new Comment();	//Set a new post to be entered into the database
			newComment.name = commentParams.name;
			newComment.message = commentParams.message;	
		await newComment.save();
		return newComment;	
	}
}

async function findAll(){
	return await Comment.find().sort({dateCreated:-1}).select('-hash'); //Returns all the posts in the database
}

module.exports = {
    create,
    findAll
};