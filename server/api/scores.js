const router = require('express').Router()
const {Score} = require('../db/models')
module.exports = router

router.put('/', async (req, res, next) => {
  try {
    console.log('REQ BODY in SCORE: ', req.body)
    console.log('REQ USER in SCORE: ', req.user.id)
    console.log('REQ PARAMS in SCORE: ', req.params.exerciseId)
    const score = await Score.findOrCreate(req.body, {
      where: {
        userId: req.user.id,
        exerciseId: req.params.exerciseId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
