const db = require("../models")

//create main model

const Product = db.products


//main work
// create product

const addProduct = async (req,res)=>{
try {
    const info = {
        title: req.body.title,
        price: req.body.price
    }
    try {
        const product = await Product.create(info);
        console.log(info);
        res.status(200).send(product)
        console.log("OK created one Product: ", product);
    } catch (error) {
        console.log("Error occured while adding product", error);
        return res.status(500).send(error);
    }
}
catch (error) {
        return res.status(500).send("Bad Request");
    }
}
//Get all products..
const getAllProducts = async (req,res)=>{
    try{
        const products = await Product.findAll({});
        res.status(200).send(products);
        console.log("OK getAll Products: ",products);
    }
    catch (error){
        console.log("Error occured in get product", error);
        return res.status(500).send(error);
    }

}
//Get 1 product..
const getOneProduct = async (req,res)=>{
    try{
        let id = req.params.id
        const product = await Product.findOne({where:{id:id}});
        res.status(200).send(product);
        console.log("OK get One Product: ",product);
    }
    catch (error){
        console.log("Error occured in get 1 product", error);
        return res.status(500).send(error);
    }
}
//Update product..
const updateProduct = async (req,res)=>{
    try{
        let id = req.params.id

        const product = await Product.update(req.body,{ where: { id:id }});
        res.status(200).send(product);
        console.log("OK Product info updated!! ");
    }
    catch (error){
        console.log("Error occured while updating the product", error);
        return res.status(500).send(error);
    }

}
//delete product
const deleteProduct = async (req,res)=>{
    try{
        let id = req.params.id
        await Product.destroy({where:{id:id}});
        res.status(200).send("Product is deleted ");
        console.log("Product is deleted!");
    }
    catch (error){
        console.log("Error occured while deleting product", error);
        return res.status(500).send(error);
    }
}
module.exports = {
    addProduct,
    getAllProducts,getOneProduct,updateProduct,deleteProduct
}