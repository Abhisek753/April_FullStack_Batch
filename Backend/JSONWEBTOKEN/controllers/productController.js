const Product = require("../models/Product")

const getAllProducts=async (req,res)=>{
    try{
      const products=await Product.find();
      res.json(products)
    }catch(err){
        res.status(500).json({message:"Error fetching products",error:err.message});
    }
}

const addProduct=async (req,res)=>{
    const {name,description,price}=req.body;
    
    try{
       const newProduct=new Product({
        name,
        description,
        price
       })
       await newProduct.save();
      res.status(201).json(newProduct);
    }catch(err){
        res.status(400).json({message:"Error adding product",error:err.message});

    }
}


module.exports={getAllProducts,addProduct}