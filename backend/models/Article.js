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
    image_name: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Article',articleSchema)