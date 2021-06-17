const http = require("http");
const express= require ("express")
const app=express()
const fs = require("fs")
const cors = require ("cors")

app.use(
    cors({
        origin:"*"
    })
)
const data= require('./userapi.json')

app.get("/",(req,res)=>{
   res.send((data))
})

app.listen(8000,"127.0.0.1",()=>{

    console.log("listing ")
})