const express = require('express')
const router = express.Router()
const db = require('../config/database/mysql')
const controller = require('../controller')
const randomString = require('randomstring')


const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/questions/')
    },
    filename: function (req, file, cb) {
        let randomName = randomString.generate()
        cb(null, randomName + ".jpg")
    }
})
const upload = multer({ storage: storage })

router.get('/', controller.question.getAll)
router.get('/:category', controller.question.getInCategory)
router.get('/:category/:stage', controller.question.getInStageOfCategory)
router.post('/', upload.single('image'), controller.question.post)
// router.put('/:nim', controller.mahasiswa.put)
router.delete('/:id', controller.question.delete)

module.exports = router