const express=require("express");
const { registerPatient, login } = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");

const router=express.Router();

router.post("/register",registerPatient);
router.post("/login",login);
router.get("/me",authenticate, (req, res) => {
    res.status(200).json({ user: req.user });
});

module.exports=router;


