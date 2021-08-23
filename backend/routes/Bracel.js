const {Router} = require('express')
const router = Router()
const Bracel = require('../models/Bracel')


router.post('/product', (req, res) => {

    const bracel = new Bracel(req.body)

    bracel.save()
            .then(data => res.json(data))
            .catch(err => console.log(err))

})

router.get('/productLink', (req, res) => {

    const promise = Bracel.find()

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})




module.exports = router