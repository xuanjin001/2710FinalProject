const express = require('express')
const productsCtrl = require('./controllers/products')

const router = new express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/products', productsCtrl.getProducts)

router.get('/products/:id', productsCtrl.getProductById)

router.delete('/products/:id', productsCtrl.deleteProductById)

router.post('/products', productsCtrl.postProduct)

module.exports = router;
