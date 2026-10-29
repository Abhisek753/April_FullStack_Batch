const { getDayName, buildSlotsFromSchedule } = require("../utils/slotHelper");
const Doctor = require("../models/doctorModel");
const Schedule = require("../models/scheduleModel");


const getAvailableSlots=async (req, res) => {
  try {
    const { doctorId, date } = req.query;
    if(!date){
      return res.status(400).json({ message: "Date is required" });
    
    }
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    const dayName = getDayName(date);
    const schedule=await Schedule.findOne({ doctor: doctorId, day: dayName });
    if(!schedule){
      return res.status(404).json({ message: "No schedule found for the given date" });
    }
    const allslots = buildSlotsFromSchedule(schedule.startTime, schedule.endTime, schedule.slotDuration);
     
    res.status(200).json({ slots: allslots });

  }catch (error) {
    console.error("Error fetching available slots:", error);
    res.status(500).json({ message: "Failed to fetch available slots" });
  }
}

module.exports = { getAvailableSlots };