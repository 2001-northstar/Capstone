const router = require('express').Router()
const {Song} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const songs = await Song.findAll()
    res.json(songs)
  } catch (err) {
    next(err)
  }
})

router.get('/:songId', async (req, res, next) => {
  try {
    const singleSong = await Song.findByPk(req.params.songId)
    res.json(singleSong)
  } catch (err) {
    next(err)
  }
})
