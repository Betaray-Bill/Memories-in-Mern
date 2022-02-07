const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const User = require("../models/users")

// Logs in existing user
const signIn = async(req, res) => {
    const { email, password } = req.body

    try {
        const existinguser = await User.findOne({ email })
        if (!existinguser) return res.status(404).json({ message: "USer Doesn't exist" })

        const isPasswordcorrect = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordcorrect) return res.status(404).json({ message: "Invalid password" })

        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, "memoriesSecret", { expiresIn: "1h" })

        res.status(200).json({ result: existinguser, token })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

// Creates the new user acc

const signUp = async(req, res) => {
    const { email, password, firstName, lastName, confirmpassword } = req.body

    try {

        const existinguser = await User.findOne({ email })
        if (existinguser) return res.status(404).json({ message: "USer exist" })

        if (password !== confirmpassword) return res.status(404).json({ message: "Incorrect password" })

        const hashpassword = bcrypt.hash(password, 12)
        const result = await User({
            email,
            password: hashpassword,
            name: `${firstName} ${lastName}`
        })
        const token = jwt.sign({ email: result.email, id: result._id }, "memoriesSecret", { expiresIn: "1h" })

        res.status(200).json({ result: result, token })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" })
    }
}


exports.signIn = signIn
exports.signUp = signUp