const Sequelize = require('sequelize')
const db = require('../db')

const LessonGIF = db.define('lessonGIF', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gifURL: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = LessonGIF
