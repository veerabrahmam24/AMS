const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Std',studentSchema);