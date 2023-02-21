const Sequelize = require('sequelize')
const conf = {
    host: 'bsrvkootqh4bl9quhuws-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306,
    username: 'ubzqcgm9dofipdel',
    password: 'zeVNe3NzwKeU9zo4Ddyg',
    database: 'bsrvkootqh4bl9quhuws'
}
const local = {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    username: 'root',
    password: '',
    database: 'volding_it'
}
const db = new Sequelize(conf)
db
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.')
})
.catch(err => {
    console.error('Unable to connect to the database:', err)
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
