const express = require('express');
const Story = require('../models/Story');
const Img = require('../models/Image');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
const upload = multer({ storage: storage });


const fs = require('fs');

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

// @action post
// @route /api/stories 
router.post("/stories", async (req, res) => {

    const story = new Story({
		title: req.body.title,  
        content: req.body.content,
        image:req.body.image
	})
	console.log(story)
	await story.save()
	res.send(story)
})
 
// @route /api/stories/:id
router.get("/stories/:id", async (req, res) => {
	//console.log(mongoose.Types.ObjectId.isValid(req.params.id));
	//console.log(req.params.id);
	const story = await Story.findById(req.params.id)
	res.send(story)
})

router.route('/img_data')
.post(upload.single('file'), function(req, res) {
    var new_img = new Img();
    new_img.img.data = fs.readFileSync(req.file.path)
    new_img.img.contentType = 'image/jpeg';
    new_img.save();
    res.json({ message: 'New image added to the db!' });
})
.get(function (req, res) {
    Img.findOne({}, 'img createdAt', function(err, img) {
        if (err)
            res.send(err);
        // console.log(img);
        res.contentType('json');
        res.send(img);
    }).sort({ createdAt: 'desc' });
});

module.exports = router;



