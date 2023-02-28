const mysql = require('mysql')
require('dotenv').config()
const controller = {}

controller.dashboard = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_NAME
    })
    const sql = "SELECT * FROM question JOIN category ON question.id_category = category.id_category"
    connection.query(sql, (err, result) => {
        if(result.length > 0) {
            res.render('pages/index', {
                title: 'Home',
                layout: 'layout/main',
                baseUrl: './',
                datas: result,
                totalData: result.length
            })
        }
        console.log(result)
    })
}

controller.addQuestion = (req, res) => {
    res.render('pages/add-question', {
        title: 'Add Question',
        layout: 'layout/main',
        baseUrl: '../'
    })
}

controller.addQuestionPost = (req, res) => {
    
}



controller.notFound = (req, res) => {
    res.render('pages/404', {
        title: '404',
        layout: 'layout/main',
        baseUrl: '../'
    })
}

module.exports = controller