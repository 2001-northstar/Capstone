const router = require('express').Router()
const {Exercise} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const exercises = await Exercise.findAll({})
    res.json(exercises)
  } catch (err) {
    next(err)
  }
})

router.get('/:exerciseId', async (req, res, next) => {
  try {
    const singleExercise = await Exercise.findByPk(req.params.exerciseId)
    res.json(singleExercise)
  } catch (err) {
    next(err)
  }
})
