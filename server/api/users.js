const router = require('express').Router()
const {User, Progress, Score} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/progress', async (req, res, next) => {
  try {
    const progress = await Progress.findAll({
      where: {userId: req.user.id},
      attributes: ['lessonId', 'completed']
    })
    res.json(progress)
  } catch (err) {
    next(err)
  }
})

router.get('/scores', async (req, res, next) => {
  try {
    const scores = await Score.findAll({
      where: {userId: req.user.id},
      attributes: ['exerciseId']
    })
    res.json(scores)
  } catch (err) {
    next(err)
  }
})
