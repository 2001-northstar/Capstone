const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.STRING,
    get: function() {
      return JSON.parse(this.getDataValue('notes'))
    },
    set: function(val) {
      return this.setDataValue('notes', JSON.stringify(val))
    }
  }
})

module.exports = Song
