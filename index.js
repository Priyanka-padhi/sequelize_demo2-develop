const express = require("express");
const cors = require('cors');


const app = express();

var corOptions = {
    origin : "https://localhost:8080"
}

//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers


const router = require("../sequelize_demo2-develop/routes/productRouter")
app.use("/",router)

//testing api

app.get('/',(req,res)=>{
    res.json({message:"Hello from API"})
})
//port
const PORT = process.env.PORT || 8000

//server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})