
const express=require("express");
const { updateSchedule, createSchedule, getScheduleByDoctor } = require("../controllers/scheduleController");

const router=express.Router();

router.get("/doctor/:doctorId",getScheduleByDoctor);

router.post("/",createSchedule);

router.patch("/:id",updateSchedule);

module.exports=router;

