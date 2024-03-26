const express = require("express")
const router = express.Router()

const commentController = require('../controllers/comment')

router.get('/:id', commentController.findAllByIdBlog)

router.post('/', commentController.insertComment)




module.exports = router