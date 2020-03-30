const Sequelize = require('sequelize')
const db = require('../db')

const Lesson = db.define('lesson', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  overview: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  numOfSteps: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Lesson
