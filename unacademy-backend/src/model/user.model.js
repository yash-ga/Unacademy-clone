const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    mobile:{type:Number, required:true},
    id:{type:Number, required:true}
})

const Users = mongoose.model("users", userSchema);

module.exports = Users