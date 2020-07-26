/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file has all the controller logic and gets invoked from the routes based on appropriate endpoint */

const db = require('../_helpers/db');
const Post = db.Post;
const mongoose = require("mongoose");

async function create(postParams, res){
	if(!postParams.title) throw new Error("Title not provided");
	else if(!postParams.description) throw new Error("Description not provided");
	else if(!postParams.category) throw new Error("Category not provided");
	else if(!postParams.price) throw new Error("Price not provided");
	else if(!postParams.contactNumber) throw new Error("Contact Number not provided");
	else if(!postParams.address) throw new Error("Address not provided");
	else if(!postParams.city) throw new Error("City not provided");
	else if(!postParams.zip) throw new Error("Zip not provided");
	else if(!postParams.email) throw new Error("Email not provided");
	else if(!postParams.img) throw new Error("Image not provided");
	else {
		const newPost = new Post();	//Set a new post to be entered into the database
			newPost.title = postParams.title;
			newPost.description = postParams.description;
			newPost.category = postParams.category;
			newPost.price = postParams.price;
			newPost.contactNumber = postParams.contactNumber;
			newPost.address = postParams.address;
			newPost.city = postParams.city;
			newPost.zip = postParams.zip;
			newPost.dateCreated = new Date();
			newPost.email = postParams.email;
			newPost.isActive = true;
			newPost.img = postParams.img;
			newPost.clicks = 0;
		await newPost.save();
		return newPost;	
	}
}

async function findAll(){
	return await Post.find().select('-hash'); //Returns all the posts in the database
}

async function findById(searchId, res){
	console.log(searchId);
	if(!mongoose.Types.ObjectId.isValid(searchId)) {	//Case where _id searched for is invalid
	    throw new Error("Invalid postId passed");
	  }

	return await Post.find({_id : searchId}).select('-hash'); //Returns the post whose id matches
}

async function findAllActive(){
	return await Post.find({isActive: true}).select('-hash');	//Returns all active posts whose isActive flag is true
}

async function updateSold(markId){
	const post = await Post.findOne({_id : markId});
	if (post.isActive == false){	//Checks if post is already inactive
		throw new Error('Post is already inactive');
	}
	else {
		post.isActive = false;	//Update the isActive flag to false
		await post.save();
		return post;	//Returns the updated post
	}
	
}


module.exports = {
    create,
    findById,
    findAll,
    findAllActive,
    updateSold 
};