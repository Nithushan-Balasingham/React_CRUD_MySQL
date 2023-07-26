const productController = require ('../controllers/productController.js')
// const {authUser} = require('../middleware/check-auth.js')


const router = require('express').Router()

router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/:id',productController.getOneProduct)
router.put('/:id', productController.updateProducts)
router.delete('/:id', productController.deleteProducts)
module.exports = router