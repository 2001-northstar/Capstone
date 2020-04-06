const Sequelize = require('sequelize')
const db = require('../db')

const ExerciseStep = db.define('exerciseStep', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  answer2: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = ExerciseStep
