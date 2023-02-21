const Sequelize = require('sequelize')
const db = require('../database/mysql')

const category = db.define('category', 
{
    id_category: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    category_name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
{
    freezeTableName: true,
    timestamps: false
})

category.removeAttribute('id')
module.exports = category