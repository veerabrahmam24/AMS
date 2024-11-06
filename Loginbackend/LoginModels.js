const { text } = require('body-parser')
const mongoose = require('mongoose')
const LoginTemplate= this.name = new mongoose.Schema({
    
    username:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    confirm_password:{
        type:"String",
        required:true
    },
    date:
{
    type:Date,
    default:Date.now
}
})


module.exports = mongoose.model('mytable',LoginTemplate)