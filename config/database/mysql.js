const Sequelize = require('sequelize')
const mysql = require('mysql')
require('dotenv').config()

const conf = {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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


// const connection = mysql.createConnection({
//     host, user, password, database
// })

// connection.connect((err) => {
//     if(err) throw err
//     console.log('Koneksi MYSQL Berhasil')
// })

const connection = mysql.createConnection({
    host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_NAME
})
connection.connect((err) => {
    if(err) throw err
    console.log('Koneksi MYSQL Berhasil')
})


module.exports = db, connection
