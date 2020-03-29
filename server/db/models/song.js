const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
})

module.exports = Song
