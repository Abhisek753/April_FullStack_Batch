require('dotenv').config();
const express=require("express");
const connectDB=require("./config/db");
const userRoutes=require("./routes/userRoutes");
const orderRoutes=require("./routes/orderRoutes");
const port=process.env.PORT||3000;
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"User and orders api"});
})
app.use("/api/users",userRoutes);
app.use("/api/orders",orderRoutes);

connectDB().then(()=>{
    app.listen(port,()=>{
       console.log(`Server is running at port ${port}`); 
    })
}).catch((err)=>{
        console.log("Server Failed");
    })