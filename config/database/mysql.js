const Sequelize = require('sequelize')
const db = new Sequelize('volding_it', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = db

// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'kuliah'
// })

// connection.connect((err) => {
//     if(err) throw err
//     console.log('Koneksi Berhasil')
// })

// module.exports = connection
