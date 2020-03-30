const router = require('express').Router()
const {Lesson, Step} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const lessons = await Lesson.findAll()
    res.json(lessons)
  } catch (err) {
    next(err)
  }
})

router.get('/:lessonId', async (req, res, next) => {
  try {
    const singleLesson = await Lesson.findByPk(req.params.lessonId, {
      include: [Step]
    })
    res.json(singleLesson)
  } catch (err) {
    next(err)
  }
})
