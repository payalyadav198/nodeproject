const mongoose = require("mongoose")

const UserModel=new mongoose.Schema({
    username:String,
    password:String
})

const Userss=mongoose.model("tourUsers",UserModel);
module.exports=Userss