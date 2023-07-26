const db = require('../models')
// create main model
const Product = db.products
// //image upload]
// const multer = require('multer')
const path = require('path')



const addProduct = async (req,res) =>{

    let info = {
        title:req.body.title,
        description:req.body.description,
        // image :`/uploads/${req.file.filename}`,
        price:req.body.price

        
    }
    
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

// get all products
const getAllProducts = async (req,res) =>{
    let products = await Product.findAll({})
    res.status(200).send(products)
}
// get single product
const getOneProduct = async (req,res) =>{
    let id = req.params.id
    let product = await Product.findOne({where : {id : id}})
    res.status(200).send(product)
}

// update product
const updateProducts = async (req,res) =>{
    let id  = req.params.id
    const product = await Product.update(req.body, {where : {id:id}})
    res.status(200).send(product)
}

// Delete product by id
const deleteProducts = async (req,res) =>{
    let id = req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('Product is deleted')
}
// const storage = multer.diskStorage({
//     destination:(req, file , cb)=>{
//         cb(null, path.join(__dirname + 'uploads/').replace("\controllers",""))
//     },filename:(req , file, cb)=>{
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage:storage,
//     limits:{fileSize:'5000000'},
//     fileFilter:(req,file,cb)=>{
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimType = fileTypes.test(file.mimetype)
//         const extname = fileTypes.test(path.extname(file.originalname ))

//         if(mimType && extname){
//             return cb(null ,true)
//         }
//         cb('Give Proper Files')
//     }
// }).single('image')

module.exports ={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProducts,
    deleteProducts
    // upload
}
