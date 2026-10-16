const Schedule=require("../models/scheduleModel");
const Doctor=require("../models/doctorModel");
const getScheduleByDoctor=async(req,res,next)=>{
     try{
        const {doctorId}=req.params;
        const doctor=await Doctor.findById(doctorId);
        if(!doctor){
            return res.status(404).json({message:"Doctor not found"});
        }
        const schedule=await Schedule.find({doctor:doctorId}).sort({day:1,startTime:1});
        return res.json({schedule:schedule});
     }catch(error){
        return res.status(500).json({message:"Error fetching schedule",error:error});
     }
}
const createSchedule=async(req,res,next)=>{
   try{
       const {doctorId,day,startTime,endTime,slotDuration}=req.body;
       if(!doctorId || !day || !startTime || !endTime){
        return res.status(400).json({message:"All fields are required"});
       }

       const doctor=await Doctor.findById(doctorId);
       if(!doctor){
        return res.status(404).json({message:"Doctor not found"});
       }
       const schedule=await Schedule.create({doctor:doctorId,day,startTime,endTime,slotDuration});
  

       res.status(201).json({message:"Schedule Created Successfully",schedule:schedule});
   }catch(error){
      res.status(500).json({message:"Schedule creation failed",error:error});
   }
}
const updateSchedule=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const {day,startTime,endTime,slotDuration}=req.body;
        const schedule=await Schedule.findById(id);
        if(!schedule){
            return res.status(404).json({message:"Schedule not found"});
        }
        const updatedSchedule=await Schedule.findByIdAndUpdate(id,{day,startTime,endTime,slotDuration},{new:true});
        return res.json({message:"Schedule updated successfully",schedule:updatedSchedule});
    }catch(error){
        res.status(500).json({message:"Schedule update failed",error:error});
    }
}

module.exports={getScheduleByDoctor,createSchedule,updateSchedule}