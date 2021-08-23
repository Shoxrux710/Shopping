const {Router} = require('express')
const router = Router()
const Erring = require('../models/Erring')


router.post('/product', (req, res) => {

    const erring = new Erring(req.body)

    erring.save()
            .then(data => res.json(data))
            .catch(err => console.log(err))

})

router.get('/productLink', (req, res) => {

    const promise = Erring.find()

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})




module.exports = router