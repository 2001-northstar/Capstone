const User = require('./user')
const Lesson = require('./lesson')
const LessonGIF = require('./lessonGIF')
const Exercise = require('./exercise')
const AudioFile = require('./audioFile')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(Lesson, {through: 'progress'})
Lesson.belongsToMany(User, {through: 'progress'})

Lesson.hasMany(LessonGIF)
LessonGIF.belongsTo(Lesson)

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
  AudioFile
  // SheetMusic
}
