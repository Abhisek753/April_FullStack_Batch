require('dotenv').config();
const express=require("express");
const connectDB = require('./config/db');

const app=express();
const port=process.env.PORT||5000;
app.use(express.json());

app.get("/home",(req,res)=>{
  res.send("home page");
});

const startServer=async ()=>{
    await connectDB();
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })
}
startServer();
