const User = require('./user')
const Lesson = require('./lesson')
const LessonGIF = require('./lessonGIF')
const Exercise = require('./exercise')
const AudioFile = require('./audioFile')
const Progress = require('./progress')
const Step = require('./step')

User.belongsToMany(Lesson, {through: Progress})
Lesson.belongsToMany(User, {through: Progress})

User.belongsToMany(Exercise, {through: Progress})
Exercise.belongsToMany(User, {through: Progress})

Lesson.hasMany(LessonGIF)
LessonGIF.belongsTo(Lesson)

Lesson.hasMany(Step)
Step.belongsTo(Lesson)

Lesson.hasMany(Exercise)
Exercise.belongsTo(Lesson)

Lesson.hasMany(AudioFile)
AudioFile.belongsTo(Lesson)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Lesson,
  LessonGIF,
  Exercise,
  AudioFile,
  Progress,
  Step
  // SheetMusic
}
