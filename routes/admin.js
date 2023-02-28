const express = require('express')
const router = express.Router()
const controller = require('../controller')

// Admin
router.get('/', controller.admin.dashboard)
router.get('/add-question', controller.admin.addQuestion)
router.get('/404', controller.admin.notFound)

module.exports = router