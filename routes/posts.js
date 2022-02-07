const express = require('express');
const router = express.Router();
const placeControllers = require('../controllers/posts')
const auth = require("../middleware/auth");
// Get Posts
router.get("/", placeControllers.getPosts)
router.post("/", auth, placeControllers.createPost)
router.patch("/:id", auth, placeControllers.updatePost)
router.delete("/:id", auth, placeControllers.deletePost)
router.patch("/:id/likePost", auth, placeControllers.likePost)


module.exports = router;