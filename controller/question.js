const model = require('../config/model/index')
const categories = require('../config/categories')
require('dotenv').config()
const controller = {}

controller.getAll = async (req, res) => {
    try {
        if(req.query.apikey == "tes123") {
            await model.question.findAll()
            // {
            //     include: [{
            //         model: model.jurusan
            //     }]
            // }
            .then(result => {
                if(result.length > 0) {
                    res.status(200).json({
                        message: 'Success to get all question',
                        data: result
                    })
                } else {
                    res.status(404).json({
                        message: 'Data not found'
                    })
                }
            })
        } else {
        //     res.status(401).json({
        //         message: 'Unauthorized'
        //     })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get all question',
        })
    }
}

controller.getInCategory = async (req, res) => {
    const category_id = categories(req, res)
    try {
        // const key = "tes123"
        // if(req.query.apikey === key) {
            await model.question.findAll({
                where: {
                    id_category: category_id
                }
            },
            {
                include: [{
                    model: model.category
                }]
            })
            .then(result => {
                if(result.length > 0) {
                    res.status(200).json({
                        message: 'Success to get all question',
                        data: result
                    })
                } else {
                    res.status(404).json({
                        message: 'Data not found'
                    })
                }
            })
        // } else {
        //     res.status(401).json({
        //         message: 'Unauthorized'
        //     })
        // }
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get all question',
        })
    }
}
controller.getInStageOfCategory = async (req, res) => {
    const category_id = categories(req, res)
    const stage = req.params.stage
    try {
        if(req.query.apikey === process.env.API_KEY) {
            let question = await model.question.findAll({
                where: {
                    id_category: category_id,
                    stage: stage
    
                }
            })
            if(question.length > 0) {
                const data = question[0].dataValues
                res.status(200).json({
                    message: 'Success to get all question',
                    data: data
                })
            } else {
                res.status(404).json({
                    message: 'Data not found'
                })
            }
        } else {
            res.status(401).json({
                message: 'Unauthorized'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Failed to get all question',
        })
    }
}

controller.post = async (req, res) => {
    console.log(req.file)
    try {
        if(req.query.apikey === process.env.API_KEY) {
            let question = await model.question.create({
                id_category: req.body.id_category,
                stage: req.body.stage,
                image: req.file.path,
                question: req.body.question,
                answer_a: req.body.answer_a,
                answer_b: req.body.answer_b,
                answer_c: req.body.answer_c,
                answer_d: req.body.answer_d,
                right_answer: req.body.right_answer
            })
            res.status(201).json({
                message: 'Success to add question',
                data: question
            })
        } else {
            res.status(401).json({
                message: 'Unauthorized'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Failed to add question',
        })
    }
}

controller.put = async (req, res) => {
    try {
        let mahasiswa = await model.mahasiswa.update({
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }, {
            where: {
                nim: req.params.nim
            }
        })
        res.status(200).json({
            message: 'Berhasil mengubah data mahasiswa'
        })   
    } catch (err) {
        res.status(500).json({
            message: 'Gagal mengubah data mahasiswa'
        })
    }
}

controller.delete = async (req, res) => {
    try {
        let mahasiswa = await model.mahasiswa.destroy({
            where: {
                nim: req.params.nim
            }
        })
        res.status(200).json({
            message: 'Berhasil menghapus data mahasiswa'
        })
    } catch (err) {
        res.status(500).json({
            message: 'Gagal menghapus data mahasiswa'
        })
    }
}


module.exports = controller