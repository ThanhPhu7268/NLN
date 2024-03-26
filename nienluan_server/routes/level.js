const express = require("express")
const router = express.Router()

const levelController = require('../controllers/level')

router.get('/', levelController.getLevel)

module.exports = router

