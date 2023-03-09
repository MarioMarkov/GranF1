const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
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
    }

})

module.exports = mongoose.model('Article',articleSchema)