/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file maintains the data model of our posts as the exchange happens */

var mongoose =  require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
	description: String,
	category:String,
	price: String,
	contactNumber: String,
	address: String,
	city: String,
	zip : String,
	dateCreated : { type: Date, default: Date.now},	//Defaulting to current time
	email : String,
	isActive : Boolean,
	img: String,	//Link to the image stored
	clicks: Number
});

postSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Post", postSchema);