const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users')

router.post("/signin", userControllers.signIn)
router.post("/signup", userControllers.signUp)

module.exports = router;