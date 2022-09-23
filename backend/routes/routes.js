const express = require('express');
const Story = require('../models/Story');
const router = express.Router();




router.get('/',(req,res)=>{
    res.json({msg:"Hello"})
})
module.exports = router;


router.get('/stories', async (req,res)=>{
    const stories = await Story.find()
    res.send(stories)
})

router.post("/stories", async (req, res) => {
    const story = new Story({
		title: req.body.title,  
		content: req.body.content,
	})
	await story.save()
	res.send(story)
})
 
router.get("/stories/:id", async (req, res) => {
	const story = await Story.findOne({ _id: req.params.id })
	res.send(story)
})
module.exports = router;



