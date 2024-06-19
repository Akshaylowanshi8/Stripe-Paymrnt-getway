const express = require("express");
const cors = require("cors");
const payRoute = require("./router/paymentRoute")

const app =express();

app.use(cors());
app.use(express.json());
app.use("/",payRoute);

const PORT = 3003

app.listen(PORT,()=>{
  console.log("server is runnig 3003");
})