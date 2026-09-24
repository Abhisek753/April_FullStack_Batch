const express=require('express');
const connectDB=require('./config/db');
const dotenv=require('dotenv');
const User = require('./model/userModel');
const Order = require('./model/orderModel');
dotenv.config();
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API is running...');
});

app.post("/users",async(req,res)=>{
    try{
        console.log('req.body', req.body);
     const user=await User.create({
        name:req.body.name,
        email:req.body.email
     });
     res.status(201).json(user);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

app.post("/orders",async(req,res)=>{
    try{
        const order=await Order.create({
            productName:req.body.productName,
            price:req.body.price,
            user:req.body.userId
        });
        res.status(201).json(order);
    }catch(err){
        res.status(400).json({ message: err.message });
    }   
});

app.get("/orders",async(req,res)=>{
    try{
        const orders=await Order.find().populate('user','name email');
        res.status(200).json(orders);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});

