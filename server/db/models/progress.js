const Sequelize = require('sequelize')
const db = require('../db')

const Progress = db.define('progress', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Progress
