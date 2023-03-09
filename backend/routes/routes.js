const express = require('express');
const Article = require('../models/Article.js');
const router = express.Router();



// @route /api
router.get('/',(req,res)=>{
    res.send({msg:"Hello"})
})

// @route /api/articles
router.get('/articles/all', async (req, res) => {
  const articles = await Article.find()

  res.send(articles)
})


// @route /api/articles
router.get('/articles/all/:raceReviews', async (req, res) => {
  var isRaceReviews = (String(req.params.raceReviews).toLowerCase() === 'true')

  const articles = await Article.find()

  articles_filtered = articles.filter(a => a.race_review == isRaceReviews)
  
  res.send(articles_filtered)
})

 
// @route /api/stories/:id
router.get("/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)

	res.send(article)
})

// @route /api/articles/:id/image
router.get('/articles/:id/image', async (req, res) => {
  const article = await Article.findById(req.params.id)

  res.send(article.image_url);
});

// @action post
// @route /api/articles

// title: state.title,
// content: state.content,
// image_url: state.image_url,
// date: new Date(),
// race_review: state.race_review
router.post("/articles", async (req, res) => {
  const article = new Article({
    title: req.body.title,  
    content: req.body.content,
    image_url: req.body.image_url,
    race_review : req.body.race_review,
    date : new Date()
  })
  await article.save()
  res.send(article)
})

// @route /api/articles/edit/:id
router.post("/articles/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)
  article.title =  req.body.title,  
  article.content = req.body.content,
  article.image_url = req.body.image_url
  article.race_review = req.body.race_review,

  await article.save()
  res.send(article)
})


// @route /api/articles/delete/:id
router.delete("/articles/delete/:id", async (req, res) => {
  let article = await Article.deleteOne({_id: req.params.id})
  res.send(article)
})

module.exports = router;
