const {Router} = require('express')
const router = Router()
const Ring = require('../models/Ring')


router.post('/product', (req, res) => {

    const ring = new Ring(req.body)

    ring.save()
            .then(data => res.json(data))
            .catch(err => console.log(err))

})

router.get('/productLink', (req, res) => {

    const promise = Ring.find()

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})




module.exports = router