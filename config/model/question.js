const Sequelize = require('sequelize')
const db = require('../database/mysql')
const category = require('./category')

const question = db.define('question', 
{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,  
    },
    id_category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer_a: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer_b: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer_c: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answer_d: {
        type: Sequelize.STRING,
        allowNull: false
    },
    right_answer: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
})

question.hasOne(category, { foreignKey: 'id_category' })
question.belongsTo(category, { foreignKey: 'id_category' })

// question.removeAttribute('id')
module.exports = question