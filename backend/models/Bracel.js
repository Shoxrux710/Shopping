const mongoose = require('mongoose')


const bracelSchema = new mongoose.Schema({
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

module.exports = mongoose.model('bracel', bracelSchema)