const mongoose = require('mongoose')


const erringSchema = new mongoose.Schema({
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

module.exports = mongoose.model('erring', erringSchema)