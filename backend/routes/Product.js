const {Router} = require('express')
const router = Router()
const Products = require('../models/Products')


router.post('/product', (req, res) => {

    const product = new Products(req.body)

    product.save()
            .then(data => res.json(data))
            .catch(err => console.log(err))

})

router.get('/productLink', (req, res) => {

    const promise = Products.find()

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})
router.put('/update/:id', (req, res) => {

    const promise = Products.findByIdAndUpdate(req.params.id, req.body)

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})




module.exports = router