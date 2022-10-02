const mongoose = require('mongoose')

const storySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }

})

module.exports = mongoose.model('Story',storySchema)