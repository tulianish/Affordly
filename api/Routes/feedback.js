
const express = require('express');
const router = express.Router();
const Feedback = require('../Models/feedback');

router.get('/getfeedback',getfeedback);    //Route to get a particular post by its id
router.post('/addfeedback', addfeedback); //Route to create a new post

async function addfeedback(req, res, next) {
    console.log(req.body);
    if(!req.body.postid) throw new Error("Post Id not provided");
	else if(!req.body.comment) throw new Error("Comment not provided");
	else if(!req.body.user) throw new Error("User not provided");
	else {
		const new_comment = new Feedback();	//Set a new post to be entered into the database
			new_comment.postid = req.body.postid;
			new_comment.comment = req.body.comment;
            new_comment.user = req.body.user;
		await new_comment.save();
		return res.status(201).json({ message: 'Comment posted' });	
	}
        //.catch(err => res.status(406).json({success : false,error: err.message}));
}

async function getfeedback(req, res, next) {
    const comments = await Feedback.find({postid : req.query.id});
	console.log(comments)
	return res.json(comments);
}

module.exports = router;