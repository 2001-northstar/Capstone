const router = require('express').Router()
const {Lesson, Step, Exercise, Progress, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const lessons = await Lesson.findAll({
      attributes: ['id', 'name', 'overview']
    })
    res.json(lessons)
  } catch (err) {
    next(err)
  }
})

router.get('/:lessonId', async (req, res, next) => {
  try {
    const singleLesson = await Lesson.findByPk(req.params.lessonId, {
      include: [Step, Exercise]
    })
    res.json(singleLesson)
  } catch (err) {
    next(err)
  }
})

router.put('/:lessonId', async (req, res, next) => {
  try {
    const row = await Progress.findOne({
      where: {
        userId: req.user.id,
        lessonId: req.params.lessonId
      }
    })
    row.completed = true
    row.save()
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
