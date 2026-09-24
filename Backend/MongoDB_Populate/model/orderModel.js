const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
  