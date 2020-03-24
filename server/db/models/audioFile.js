const Sequelize = require('sequelize')
const db = require('../db')

const AudioFile = db.define('audioFile', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioURL: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = AudioFile
