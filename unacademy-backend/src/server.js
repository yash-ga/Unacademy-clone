const express = require("express");
const app = express();
const connect = require("../src/config/db")
app.use(express.json());
const cors = require("cors")
const userController = require("../src/controller/user.controller")

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use("/users", userController)

app.listen(2860, async(req, res) => {
    await connect();
    console.log("Listening on port 2860");
})