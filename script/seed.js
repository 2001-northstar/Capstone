'use strict'

const db = require('../server/db')
const {User, Lesson} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Cody Coder',
      email: 'cody@email.com',
      level: 0,
      score: 0,
      password: '123'
    }),
    User.create({
      name: 'Murph the Smurf',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const lessons = await Lesson.bulkCreate([
    {
      name: 'Keys',
      overview: 'Learn what keys are.',
      content: 'You can tell that it is a scale, cause of the way that it is.'
    },
    {
      name: 'Scales',
      overview: 'Learn what a scale is.',
      content: 'You can tell that it is a scale, cause of the way that it is.'
    }
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${lessons.length} lessons`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
