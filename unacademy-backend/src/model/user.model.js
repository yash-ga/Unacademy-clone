const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    mobile:{type:Number, required:true},
    email:{type:String,required:true},
    state:{type:String,required:true}
})

const Users = mongoose.model("users", userSchema);

module.exports = Users