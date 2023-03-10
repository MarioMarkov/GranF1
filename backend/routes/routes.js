const express = require('express');
const Article = require('../models/Article.js');
const router = express.Router();

// @desc Test Routes
// @route GET /api/
router.get('/',(req,res)=>{
    res.send({msg:"Hello"})
})

// @desc Get all articles
// @route GET /api/articles/all
router.get('/articles/all', async (req, res) => {
  const articles = await Article.find()

  res.send(articles)
})

// @desc Get all articles from a type 
// @route GET /api/articles/all/:raceReviews
router.get('/articles/all/:raceReviews', async (req, res) => {
  var isRaceReviews = (String(req.params.raceReviews).toLowerCase() === 'true')

  const articles = await Article.find()

  articles_filtered = articles.filter(a => a.race_review == isRaceReviews)
  
  res.send(articles_filtered)
})

// @desc Get article by id
// @route GET /api/articles/:id
router.get("/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)

	res.send(article)
})

// @desc Post an article
// @route POST /api/articles
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


// @desc Post edited article
// @route GET /api/articles/edit/:id
router.post("/articles/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)
  
  article.title =  req.body.title,  
  article.content = req.body.content,
  article.image_url = req.body.image_url
  article.race_review = req.body.race_review,

  await article.save()
  res.send(article)
})

// @desc Delete  article
// @route GET /api/articles/delete/:id
router.delete("/articles/delete/:id", async (req, res) => {
  let article = await Article.deleteOne({ _id: req.params.id })
  
  res.send(article)
})

module.exports = router;
