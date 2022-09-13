const  productController = require("../controllers/productController")
const reviewController = require("../controllers/reviewController")

const router = require("express").Router()

router
    .post("/addProduct",productController.addProduct)
    .get("/allProducts",productController.getAllProducts)
    .get("/getProduct/:id",productController.getOneProduct)
    .put("/updateProduct/:id",productController.updateProduct)
    .delete("/deleteProduct/:id",productController.deleteProduct)
    .post("/addReview",reviewController.addReview)
    .post("/updateReview/:id",reviewController.updateReview)
    .get("/getAllReviews",reviewController.getAllReviews)
    .get("/getReview/:id",reviewController.getreviewOneProduct)


module.exports = router;