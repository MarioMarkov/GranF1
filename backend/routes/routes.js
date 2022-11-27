const express = require('express');
const Story = require('../models/Story');
const imageModel = require('../models/Image');
const router = express.Router();
const fs = require('fs');
const multer = require('multer')


// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
  
    filename: (req, file, cb)=>{
      cb(null, file.originalname)
    }
  
  })
  
const upload = multer({storage:storage})


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



// Post an image
router.post('/img_data', upload.single('testImage'), function (req, res) {
    console.log(req.file.filename)
    const saveImage = new imageModel({
        name: req.body.name,
        img: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png"
        }
    })
    saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
})


// Get Images
router.get('/img_data',async (req,res)=>{
  const allData = await imageModel.find()
  res.json(allData)
})



module.exports = router;



