var mongoose =  require("mongoose");

var feedback_schema = new mongoose.Schema({
    postid: String,
	comment: String,
	user:String
});

feedback_schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("feedback", feedback_schema);