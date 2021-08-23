const mongoose = require('mongoose')
const env = require('dotenv')
env.config()

module.exports = () => {
     
     mongoose.connect(`${process.env.MONGO_DB_BAZA}`,
     {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

     const db = mongoose.connection     
     db.on('open', () => console.log('mongodbga online ulandik'))
     db.on('error', (err) => console.log('qayerdadir xatolik bor', err))
}