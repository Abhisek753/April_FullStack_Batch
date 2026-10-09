const  jwt  = require("jsonwebtoken");
const userModel = require("../models/userModel");
const User=require("../models/userModel")
const bcrypt = require('bcrypt');
const registerPatient=async (req,res,next)=>{
   try{
     const {name,email,password}=req.body||{};
     if(typeof name!=='string'||!name.trim()){
        return res.status(400).json({message:"Name is required"});
     };
     if(typeof email !=='string'|| !email.trim()||!email.includes('@')||!email.includes('.')){
         return res.status(400).json({message:"Enter a valid email address."});
     };
     if(typeof password !=='string'||password.length<8){
         return res.status(400).json({message:"Password must be at least 8 characters"});
     };
     const hashedPassword=await bcrypt.hash(password,10);
    
     const user=await User.create({
       name:name.trim(),
       email:email.trim(),
       password:hashedPassword,
       role:'patient'
             });
    const token=jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET);
    return res.status(201).json({message:"Patient registered successfully",token,user:{id:user.id,name:user.name,email:user.email,role:user.role}});
   }catch(error){
      return res.status(409).json({message:'An account registration failed',error:error});
   }
}

const login=async (req,res,next)=>{
    try{
       const {email,password}=req.body||{};

       if(typeof email!=='string'||!email.trim()){
        return res.status(400).json({message:"Email is required"});
       };
        if(typeof password!=='string'||!password.trim()){
        return res.status(400).json({message:"Password is required"});
       }

       const user=await User.findOne({email:email.trim().toLowerCase()});

       if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(401).json({message:"Invalid email or password"});
       }
       const token=jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'});
       
       return res.json({
        message:"Login Successful",
        token,
        user:{id:user.id,name:user.name,email:user.email,role:user.role}
       });
    }catch(error){
       return res.status(409).json({message:'An account Login failed',error:error});
    }
    
}

module.exports={registerPatient,login}