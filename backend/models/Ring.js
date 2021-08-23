const mongoose = require('mongoose')


const ringSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('ring', ringSchema)