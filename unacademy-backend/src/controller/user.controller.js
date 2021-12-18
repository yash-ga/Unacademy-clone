const express = require("express");
const router = express.Router()

const Users = require("../model/user.model");

router.post("", async(req, res) => {
    const user = await Users.create(req.body);
    return res.status(201).send({user})
})

router.get("", async(req, res) =>{
    const users = await Users.find().lean().exec();
    return res.status(200).send({users})
})

router.delete("/:id", async(req, res) => {
    const user = await Users.deleteOne({_id:req.params.id})
    return res.status(200).send({user})
})


module.exports = router