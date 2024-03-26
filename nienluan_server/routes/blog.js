const express = require("express")
const router = express.Router()

const blogController = require('../controllers/blog')

router.get('/', blogController.getBlog)
router.get('/bloghome', blogController.getBlogHome)

module.exports = router