const { default: mongoose } = require("mongoose");

const orderSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    items:[
        {
            product:{type:String,required:true,trim:true},
            quantity:{type:Number,required:true,min:1},
            unitPrice:{type:Number,required:true,min:0}
        }
    ],
    status:{type:String,enum:['pending','paid','shipped','cancelled'],default:'pending'}
},
{timestamp:true}
);
module.exports=mongoose.model('Order',orderSchema);