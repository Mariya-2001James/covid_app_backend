const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRoute=require("./controllers/patientRouter")


const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/patient",patientRoute)

mongoose.connect("mongodb+srv://mariya:mariya2001@cluster0.vpzhzrp.mongodb.net/patientDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.listen(3008,()=>{
    console.log("server is running")
})