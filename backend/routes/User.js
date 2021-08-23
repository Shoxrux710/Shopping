const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register', async (req, res) => {

    const {name, surname, email, password} = req.body

    const user = await User.findOne({email})

    if (user){
        return res.status(400).json({msg: "User already exists"})
    }

    const passwordHashed = await bcrypt.hash(password, 10)

    const promise = new User({
        name,
        surname,
        email, 
        password: passwordHashed
    })

    promise.save()
            .then(data => res.json(data))
            .catch(err => console.log(err))


})

router.post('/login', async (req, res) => {

    const {email, password} = req.body

    if (email.length === 0 || password.length === 0){
        return res.status(400).json({msg: "Please..."})
    }

    const user = await User.findOne({email})

    if (!user){
        return res.status(400).json({msg: "User does not exists go to register"})
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match){
        return res.status(400).json({msg: "inCorrect password"})
    }

    const payload = {id: user._id, name: user.name,
         surname: user.surname}

    const token = jwt.sign(payload, "KFDVSDVSDSDV", {expiresIn: "1d"})

    res.json({
        token,
        user: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            id: user._id
        }
    })
})

router.get('/full', (req, res) => {
    const promise = User.find({})

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})

module.exports = router