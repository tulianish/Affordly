/*

Contribution : Tejasvi Vig
 
Name : Tejasvi Vig
Banner ID : B008337057
Email id : tj252001@dal.ca

Feature Name: Feedback

Feature Details: 

This file contains the back end model for feedback feature
It creates a model which has comment details like post id , user who commented and the corresponding comment 
and helps in storing the values in the database
*/

var mongoose =  require("mongoose");

var feedback_schema = new mongoose.Schema({
    postid: String,
	comment: String,
	user:String
});

feedback_schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("feedback", feedback_schema);