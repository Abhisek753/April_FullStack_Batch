const Order = require("../models/Order");
const User = require("../models/User");


const createOrder=async (req,res,next)=>{
   try{
     const {user,items,status}=req.body;
     if(!(await User.exists({_id:user}))){
        return res.status(404).json({message:"User not found"});
     }
     const order= await Order.create({
       user,items,status
     });
   
  
     res.status(201).json({message:"Order Created",user:order});
   }catch(error){
    console.log(error)
   }
}
const getOrders=async (req,res,next)=>{
     try{
        const users=await Order.find().populate("user",'name email').sort({createdAt:-1});

        res.json(users);
     }catch(err){
        console.log(err);
     }
}

module.exports={createOrder,getOrders}