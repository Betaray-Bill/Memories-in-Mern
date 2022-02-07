const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        let decode
        if (token) {
            decode = jwt.verify(token, "memoriesSecret")
            req.userId = decode.id
        } else {
            decode = jwt.decode(token)
            req.userId = decode.sub
        }
        next()
    } catch (err) {
        console.log(err);
    }
}

exports.module = auth