var mongoose = require('mongoose')
var Schema = mongoose.Schema

var imgSchema = new mongoose.Schema({
    name:String,
    img: {
        data: Buffer,
        contentType: String
    }
})

module.exports = ImageModel = mongoose.model("Image",imgSchema)