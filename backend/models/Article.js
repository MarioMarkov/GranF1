const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    bg_title: {
        type: String,
        required: true
    },
    en_title: {
        type: String,
        required: true
    },
    bg_content: {
        type: String,
        required: true
    },
    en_content:{
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    race_review: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true 
    },
    public: {
        type: Boolean,
        required: true 
    }

})

module.exports = mongoose.model('Article',articleSchema)