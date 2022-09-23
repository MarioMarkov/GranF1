const mongoose = require('mongoose')

const storySchema = mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String,
    }
})

module.exports = mongoose.model('Story',storySchema)