const Sequelize = require('sequelize')
const db = require('../db')

const Exercise = db.define('exercise', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  overview: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  notes: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
})

module.exports = Exercise
