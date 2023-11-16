const express = require("express");
const app = express();
const path = require("path");

const imagePath=path.join(__dirname,"images");
app.use('/images',express.static(imagePath));



app.get("/html1",(req,res)=>{
    res.sendFile(path.join(__dirname,"web 2 -.html"));
})

app.get("/html2",(req,res)=>{
    res.sendFile(path.join(__dirname,"3.web.html"));
})

app.get("/html3",(req,res)=>{
    res.sendFile(path.join(__dirname,"web 4.html"));
})



app.listen(1237 ,  ()=>{
    console.log("server is running");
})
