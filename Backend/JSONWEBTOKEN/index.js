const express=require("express");
const port=5000;
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const authRoute=require("./routes/authRoutes");
const connectDB = require("./config/db");
const authMiddleware = require("./middlewares/authMiddleware");
app.use(express.json());

app.get("/product",authMiddleware,(req,res)=>{
    res.send("Product Api Working");
});
app.get("/",(req,res)=>{
    res.send("Get Api Working");
})
app.use("/auth",authRoute);

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running  at port ${port}`);
    })
});
