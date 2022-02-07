const PostMessage = require("../models/posts")
const mongoose = require("mongoose")

const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json({ postMessages })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


const createPost = async(req, res) => {
    const post = req.body

    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(200).json({ newPost })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const updatePost = async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json("No post in this ID")

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
    res.json(updatedPost)
}

const deletePost = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("No post in this ID")

    const deletedPost = await PostMessage.findByIdAndRemove(id)
    res.json(deletedPost)
}


const likePost = async(req, res) => {
    const { id } = req.params
    if (!req.userId) return res.json({ message: "Unauthenticated" })

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("No post in this ID")
    const post = await PostMessage.findById(id)

    const index = await post.likes.findIndex(id => id === String(req.userId))
    if (index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter(id => id !== String(req.userId))
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })
    res.json(updatedPost)
}

module.exports = getPosts
module.exports = createPost
module.exports = updatePost
module.exports = deletePost
module.exports = likePost