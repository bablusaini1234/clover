const express= require("express")
const app= express()
app.set("view engine","ejs")
app.use(express.static("public"))
require('dotenv').config()


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(process.env.PORT,(req,res)=>{
    console.log("server is running port on 5000")
})