const express = require("express");

const paymentcontroller = require("../controller/paymentController");

const router = express.Router();

router.post("/payment",paymentcontroller.paycontroller)


module.exports=router;