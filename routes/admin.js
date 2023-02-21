const express = require('express')
const router = express.Router()
const controller = require('../controller')

// Admin
router.get('/', controller.admin.dashboard)

module.exports = router