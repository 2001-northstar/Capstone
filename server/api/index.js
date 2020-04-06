const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/lessons', require('./lessons'))
router.use('/exercises', require('./exercises'))
router.use('/songs', require('./songs'))
router.use('/scores', require('./scores'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
