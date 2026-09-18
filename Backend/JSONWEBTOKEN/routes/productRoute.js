const express=require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllProducts, addProduct } = require("../controllers/productController");
const roleMiddleware = require("../middlewares/roleMiddleware");
const router=express.Router();
const multer=require("multer");
const path=require("path");

const storage = multer.diskStorage({
  destination:  (req, file, cb) =>{
    cb(null, 'uploads/')
  },
  filename:  (req, file, cb)=> {
      cb(null,`${Date.now()}${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

router.get("/getall",authMiddleware,roleMiddleware("user","admin"),getAllProducts);
router.post("/add",authMiddleware,roleMiddleware("admin"),upload.single('image'),addProduct);

module.exports=router;