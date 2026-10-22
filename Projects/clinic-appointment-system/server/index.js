require('dotenv').config();
const express=require("express");
const connectDB = require('./config/db');
const authRoutes=require("./routes/authRoutes");
const doctorRoutes=require("./routes/doctorRoutes");
const scheduleRoutes=require("./routes/scheduleRoutes");
const cors=require("cors");
const app=express();
app.use(cors());
const port=process.env.PORT||5000;
app.use(express.json());

app.get("/home",(req,res)=>{
  res.send("home page");
});

app.use("/api/auth",authRoutes);
app.use("/api/doctors",doctorRoutes);
app.use("/api/schedules",scheduleRoutes);
const startServer=async ()=>{
    await connectDB();
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })
}
startServer();
