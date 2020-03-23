const Sequelize = require('sequelize')
const db = require('../db')

const AudioFile = db.define('audioFile', {})

module.exports = AudioFile
