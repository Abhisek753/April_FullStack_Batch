const express=require("express");
const { createDoctor, listDoctors, getDoctorById, updateDoctor } = require("../controllers/doctorController");
const authenticate = require("../middleware/authMiddleware");

const router=express.Router();

router.get("/",authenticate,listDoctors);

router.get("/:id",authenticate,getDoctorById);

router.post("/",authenticate,createDoctor);

router.patch("/:id",updateDoctor);

module.exports=router;