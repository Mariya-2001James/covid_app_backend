const mongoose=require("mongoose")

const patientSchema=mongoose.Schema(
    {
        patientname:String,
        patientphone:String,
        patientaddress:String,
        symptoms:String,
        status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)