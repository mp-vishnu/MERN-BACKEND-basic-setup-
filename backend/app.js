const express=require('express');
const app=express(); // creating an instance
app.use(express.json()); //req response format

//route imports
const basic=require("./router/basicRouter");

app.use("/",basic);
module.exports=app;