const User = require("../models/User")

const createUser=async (req,res,next)=>{
   try{
     const user= await User.create({
        name:req.body.name,email:req.body.email
     });
   
    // const user=new User({
    //      name:req.body.name,email:req.body.email
    // })
    // await user.save();
     res.status(201).json({message:"User Created",user:user});
   }catch(error){
    console.log(error)
   }
}
const getUsers=async (req,res,next)=>{
     try{
        const users=await User.find().sort({createdAt:-1});
        res.json(users);
     }catch(err){
        console.log(err);
     }
}

module.exports={createUser,getUsers}