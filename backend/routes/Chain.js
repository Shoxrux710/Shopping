const {Router} = require('express')
const router = Router()
const Chain = require('../models/Chain')


router.post('/product', (req, res) => {

    const chain = new Chain(req.body)

    chain.save()
            .then(data => res.json(data))
            .catch(err => console.log(err))

})

router.get('/productLink', (req, res) => {

    const promise = Chain.find()

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})




module.exports = router