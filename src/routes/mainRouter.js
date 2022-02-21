const express = require( 'express');
const mainController = require( '../controller/mainController')
const router = express.Router();

router.post("/products", mainController.createProduct)
router.get("/products", mainController.getProduct)
router.get("/products/:productId", mainController.getProductById)
router.patch("/products/:productId", mainController.updateProduct)
router.delete("/products/:productId", mainController.deleteProduct)




module.exports = router;