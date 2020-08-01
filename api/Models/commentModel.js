/* Created by Anish Tuli, B00843522 (anish.tuli@dal.ca) */

/* This file maintains the data model of our posts as the exchange happens */

var mongoose =  require("mongoose");

var commentSchema = new mongoose.Schema({
    name: String,
	message: String,
	dateCreated : { type: Date, default: Date.now},	//Defaulting to current time
});

commentSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Comment", commentSchema);