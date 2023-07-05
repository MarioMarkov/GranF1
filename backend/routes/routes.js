const express = require("express");
const Article = require("../models/Article.js");
const router = express.Router();

// @desc Get all articles
// @route GET /api/articles/all
router.get("/articles/all", async (req, res) => {
  const articles = await Article.find();

  res.send(articles);
});

// @desc Get all articles from a type
// @route GET /api/articles/all/:raceReviews
router.get("/articles/all/:raceReviews", async (req, res) => {
  var isRaceReviews = String(req.params.raceReviews).toLowerCase() === "true";

  const articles = await Article.find();

  articles_filtered = articles.filter((a) => a.race_review == isRaceReviews);

  res.send(articles_filtered);
});

// @desc Get article by id
// @route GET /api/articles/:id
router.get("/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);

  res.send(article);
});

// @desc Post an article
// @route POST /api/articles
router.post("/articles", async (req, res) => {
  const article = new Article({
    en_title: req.body.en_title,
    bg_title: req.body.bg_title,

    en_content: req.body.en_content,
    bg_content: req.body.bg_content,

    image_url: req.body.image_url,
    race_review: req.body.race_review,
    date: new Date(),
    public: false,
  });
  await article.save();
  res.send(article);
});

// @desc Post edited article
// @route GET /api/articles/edit/:id
router.post("/articles/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);

  article.en_title = req.body.en_title;
  (article.bg_title = req.body.bg_title),
    (article.en_content = req.body.en_content);
  article.bg_content = req.body.bg_content;

  article.image_url = req.body.image_url;
  article.race_review = req.body.race_review;

  console.log(article);

  await article.save();
  res.send(article);
});

// @desc Delete  article
// @route GET /api/articles/delete/:id
router.delete("/articles/delete/:id", async (req, res) => {
  let article = await Article.deleteOne({ _id: req.params.id });

  res.send(article);
});

// @desc Make article public
// @route GET /api/articles/make_public/:id
router.post("/articles/make_public/:status/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  const status = String(req.params.status).toLowerCase() === "true";

  article.public = status;
  await article.save();
  res.send(article);
});

module.exports = router;
