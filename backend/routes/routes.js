const express = require('express');
const Article = require('../models/Article.js');
const router = express.Router();
const fs = require('fs');
const multer = require('multer')
const {resolve} = require('path');


//Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images')
    },
  
    filename: (req, file, cb)=>{
      cb(null, file.originalname)
    }
  
  })
  
const upload = multer({ storage: storage })


// @route /api
router.get('/',(req,res)=>{
    res.send({msg:"Hello"})
})

// @route /api/articles
router.get('/articles', async (req, res) => {
  const articles = await Article.find()
  console.log(articles)

  res.send(articles)
})

// @action post
// @route /api/articles 
router.post("/articles", upload.single("image"), async (req, res) => {
    console.log(req.body)
    const article = new Article({
      title: req.body.title,  
      content: req.body.content,
      image_name:req.body.image_name
    })
	await article.save()
	res.send(article)
})
 
// @route /api/stories/:id
router.get("/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)

	res.send(article)
})

// @route /api/articles/:id/image
router.get('/articles/:id/image', async (req, res) => {
  const article = await Article.findById(req.params.id)
  root = resolve() 

  res.sendFile('./public/images/' + article.image_name, { root: root });
});


// @route /api/articles/edit/:id
router.post("/articles/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)
  article.title =  req.body.title,  
  article.content = req.body.content,
  article.image_name= req.body.image_name

  await article.save()
  res.send(article)
})


// @route /api/articles/edit/:id
router.delete("/articles/delete/:id", async (req, res) => {
  let article = await Article.deleteOne({_id: req.params.id})
  res.send(article)
})


// // Post an image
// router.post('/img_data', upload.single('testImage'), function (req, res) {
//     console.log(req.file.filename)
//     const saveImage = new imageModel({
//         name: req.body.name,
//         img: {
//             data: fs.readFileSync("uploads/" + req.file.filename),
//             contentType: "image/png"
//         }
//     })
//     saveImage
//     .save()
//     .then((res) => {
//       console.log("image is saved");
//     })
//     .catch((err) => {
//       console.log(err, "error has occur");
//     });
//     res.send('image is saved')
// })



module.exports = router;



