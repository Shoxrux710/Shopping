const {Router} = require('express')
const router = Router()
const Carts = require('../models/Carts')


router.post('/user', (req ,res) => {

    const cart = new Carts(req.body)

    cart.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))

})


module.exports = router