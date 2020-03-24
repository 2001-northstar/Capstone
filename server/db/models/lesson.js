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
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
  // completed: {
  //   type: Sequelize.BOOLEAN,
  //   defaultValue: false
  // }  // ON THE THRU TABLE?
})

module.exports = Lesson
