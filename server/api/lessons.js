const router = require('express').Router()
const {lesson, exercise} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const lessons = await lesson.findAll()
    res.json(lessons)
  } catch (err) {
    next(err)
  }
})

router.get('/:lessonId', async (req, res, next) => {
  try {
    const singleLesson = await lesson.findByPk(req.params.lessonId, {
      include: [exercise]
    })
    res.json(singleLesson)
  } catch (err) {
    next(err)
  }
})
