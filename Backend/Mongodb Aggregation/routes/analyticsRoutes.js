

const express = require('express');
const { getUsersWithOrderSummary,getOrders } = require('../controllers/analyticsController');

const router = express.Router();
router.get("/users-with-orders", getUsersWithOrderSummary);
router.get("/orders", getOrders);

module.exports = router;