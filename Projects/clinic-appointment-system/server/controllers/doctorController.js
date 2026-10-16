
const bcrypt = require('bcrypt');
const User=require("../models/userModel");
const Doctor=require("../models/doctorModel");
const createDoctor=async(req,res,next)=>{
    try{
        const {name,email,password,specialization,consultationFee,bio}=req.body||{};
        if(typeof name !=='string'||!name.trim){
            return res.status(400).json({message:"Name is required"});
        };
        if(typeof email !=='string'||!email.trim){
            return res.status(400).json({message:"Email is required"});
        }
        if(typeof password !=='string'||password.length<8){
            return res.status(400).json({message:"Password must be at least 8 characters."});
        };
        if(typeof specialization !=='string'||!specialization.trim){
            return res.status(400).json({message:"Specialization is required"});
        }
        if(typeof consultationFee !=='number'||consultationFee<0){
            return res.status(400).json({message:"Consultation fee must be a positive number."});
        }
        const hashedPassword=await bcrypt.hash(password,10);
       const user=await User.create({
        name:name.trim(),
        email:email.trim().toLowerCase(),
        password:hashedPassword,
        role:'doctor',
       });
       try{
        const doctor=await Doctor.create({
            user:user._id,
            specialization:specialization,
            consultationFee:consultationFee,
            bio:typeof bio==='string'?bio.trim():'',
        });

        const populated=await Doctor.findById(doctor._id).populate('user','name email');

        return res.status(201).json({message:"Doctor created successfully",populated})

       }catch(err){
          await User.findByIdAndDelete(user._id);
       }

    }catch(error){
        res.status(409).json({message:"Email is already in use."})

    }
}
const listDoctors=async(req,res,next)=>{
    try{
        const doctors=await Doctor.find({isActive:true}).populate("user","name email").sort({createdAt:-1});
       return res.json({count:doctors.length,doctors:doctors});


    }catch(error){
       return res.json({message:"Doctor get api failed",error:error})
    }

}
const getDoctorById=async(req,res,next)=>{
    console.log(req.params.id,"params");
     try{
       const doctor=await Doctor.find({_id:req.params.id,isActive:true}).populate("user","name email");
       if(!doctor){
        return res.status(404).json({message:"Doctor not found"});
       };
       return res.json({doctor:doctor});
     }catch(error){
        return res.status(500).json({message:"Doctor get by id api failed",error:error});
     }
}
const updateDoctor=async(req,res,next)=>{
    try{
        const doctor =await Doctor.findById(req.params.id).populate("user","name email");
        const {specialization,consultationFee,bio,isActive}=req.body;
        if(specialization){
            doctor.specialization=specialization;
        }
        if(consultationFee!==undefined){
            doctor.consultationFee=consultationFee;
        }
        if(bio!=undefined){
            doctor.bio=bio;
        }
        if(isActive!==undefined){
            doctor.isActive=isActive;
        }
      await doctor.save();
      return res.json({message:"Doctor Updated Successfully",doctor:doctor})


    }catch(error){
        return res.status(500).json({message:"Doctor update api failed",error:error});
    }


}
    


module.exports={createDoctor,listDoctors,getDoctorById,updateDoctor};