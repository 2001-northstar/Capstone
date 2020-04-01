const Sequelize = require('sequelize')
const db = require('../db')

const Step = db.define('step', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  highlightedNotes: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  noteLabels: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Step
