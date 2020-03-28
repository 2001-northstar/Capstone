const Sequelize = require('sequelize')
const db = require('../db')

const Step = db.define('step', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Step
