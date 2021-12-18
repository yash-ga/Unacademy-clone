const mongoose= require("mongoose");
const env = require('dotenv').config()
module.exports =() => {
    return mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.sl7vx.mongodb.net/unacademy`)
}