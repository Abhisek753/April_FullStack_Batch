const { getAvailableSlots } = require("../controllers/appointmentController");

const router = require("express").Router();
router.get("/slots", getAvailableSlots);

module.exports = router;