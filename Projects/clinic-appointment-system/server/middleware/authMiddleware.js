const jwt=require("jsonwebtoken");
const User=require("../models/userModel");

const authenticate=async(req,res,next)=>{
    const authorization=req.headers.authorization||'';
    const [scheme,token]=authorization.split(" ");
    console.log(scheme,token);
    if(scheme!=='Bearer'||!token){
        return res.status(401).json({message:"Send a token using Authrization: Bearer token"})
    };
    try{
     const  payload =jwt.verify(token,process.env.JWT_SECRET);
     console.log(payload);
     const user=await User.findById(payload.id);
     if(!user){
        return res.status(401).json({message:"User not found"})
     }
     req.user=user;
      return next();
    }
    catch(error){
        return res.status(401).json({message:"Invalid token",error:error.message})
    }

}
module.exports=authenticate;