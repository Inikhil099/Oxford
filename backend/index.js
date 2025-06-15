const cookieParser = require("cookie-parser");
const express = require("express");
const { connectDB } = require("./dbConnection");
const app = express()
const PORT = 3000;

connectDB("mongodb://127.0.0.1:27017/oxford").then(()=>{
    console.log("db connected")
})

app.use(cookieParser())
// app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.listen(PORT,(e)=>{
    console.log("server running on port",PORT)
})