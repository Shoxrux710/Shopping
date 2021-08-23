const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const env = require('dotenv')
const cors = require('cors')
const productsRouter = require('./routes/Product')
const ringRouter = require('./routes/Ring')
const erringRouter = require('./routes/Erring')
const bracelRouter = require('./routes/Bracel')
const chainRouter = require('./routes/Chain')
const cartsRouter = require('./routes/Cart')
const userRouter = require('./routes/User')




app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

// mongoDb baza
const db = require('./config/db')
db()

// routes
app.use('/api', productsRouter)
app.use('/ring', ringRouter)
app.use('/erring', erringRouter)
app.use('/bracel', bracelRouter)
app.use('/chain', chainRouter)
app.use('/cart', cartsRouter)
app.use('/user', userRouter)




env.config()
// listen

app.listen(process.env.PORT, () => console.log(`serverni ${process.env.PORT} tikladik`))