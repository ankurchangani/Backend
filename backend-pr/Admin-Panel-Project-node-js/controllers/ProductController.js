const ProductModel = require("../models/ProductModel");
const ProductActiveLogModel = require("../models/ActiveLogModel");

const ProductGet = async (req, res) => {
    try {
        const { search, category } = req.query;
        const query = {}

        if (search) query.name = { $regex }

        if (category) query.category = category;

        const products = await ProductModel.find(query);
        
        res.render("pages/ViewProduct" , {products , search ,category}) ;
    } catch (error) {
        console.log("Product Get Error", error.message);
        res.status(500).send("Server Error");
    }
}

const ViewProductGet = async(req , res) => {res.redirect("pages/AddProduct")}


const ProductAdd = async (req , res) => {
    try {
        const ProductImage = req.file ? req.path : null ; 
        
        const productData = {...req.body , ProductImage}

        const Product = await ProductModel.create(productData)

        
        console.log(Product)
    } catch (error) {
        console.log(error)
    }
}

