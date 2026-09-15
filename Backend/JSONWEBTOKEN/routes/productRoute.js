const express=require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllProducts, addProduct } = require("../controllers/productController");
const roleMiddleware = require("../middlewares/roleMiddleware");
const router=express.Router();


router.get("/getall",authMiddleware,roleMiddleware("user","admin"),getAllProducts);
router.post("/add",authMiddleware,roleMiddleware("admin"),addProduct);

module.exports=router;