const express = require('express');
const Story = require('../models/Story');
const router = express.Router();
var mongoose = require('mongoose');


// @route /api
router.get('/',(req,res)=>{
    res.send({msg:"Hello"})
})
module.exports = router;

// @route /api/stories
router.get('/stories', async (req,res)=>{
    const stories = await Story.find()
    res.send(stories)
})

// @route /api/stories
router.post("/stories", async (req, res) => {
    const story = new Story({
		title: req.body.title,  
		content: req.body.content,
	})
	await story.save()
	res.send(story)
})
 
// @route /api/stories/:id
router.get("/stories/:id", async (req, res) => {
	console.log(mongoose.Types.ObjectId.isValid(req.params.id));
	console.log(req.params.id);
	const story = await Story.findById(req.params.id)
	res.send(story)
})
module.exports = router;



