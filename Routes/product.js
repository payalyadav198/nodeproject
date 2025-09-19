const express = require('express')
const router = express.Router()
const Userss = require("../models/usermodel");

router.post("/api/users", async (req, res) => {
    const myusers = new Userss(req.body)
    const savedata = await myusers.save()
    if (savedata) {
        res.status(200).json({
            message: "Successfully user signed",
            allusers: myusers
        })
    }
})

router.get("/allusers", async (req, res) => {
    const users = await Userss.find({})
    res.json(users)
})


module.exports = router
