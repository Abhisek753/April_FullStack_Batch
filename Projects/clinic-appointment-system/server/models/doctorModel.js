const mongoose=require("mongoose");

const doctorSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true,
    },
    specialization:{type:String,   required:true,trim:true},
    consultationFee:{type:Number,required:true,trim:true,min:0},
    bio:{type:String,trim:true,default:''},
    isActive:{type:Boolean,default:true}

},{timestamps:true});

module.exports=mongoose.model("Doctor",doctorSchema);