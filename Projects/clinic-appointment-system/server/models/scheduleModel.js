const mongoose=require("mongoose");

const scheduleSchema= new mongoose.Schema({
   doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Doctor',
    required:true
   },
   day:{
    type:String,
     required:true,
     enum:['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'],
   },
   startTime:{type:String,required:true},
   endTime:{type:String,required:true},
   slotDuration:{type:Number,required:true,default:30}

},{timestamps:true});

module.exports=mongoose.model("Schedule",scheduleSchema);