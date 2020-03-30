'use strict'

const db = require('../server/db')
const {User, Lesson, Step} = require('../server/db/models')

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
      content: 'You can tell that it is a key, cause of the way that it is.'
    },
    {
      name: 'Scales',
      overview: 'Learn what a scale is.',
      content: 'You can tell that it is a scale, cause of the way that it is.'
    }
  ])

  const steps = await Step.bulkCreate([
    {
      content:
        '*record scratch, freeze frame*\nSo you might be wondering to yourself, “How did I get myself in this situation? How am I supposed to remember all of these notes?!” Don’t shit yourself just yet. We have to start somewhere.\nYou can start by clicking any number of keys on this keyboard. Pay attention to how high or low the tone sounds.\nWhen you are ready to move on, just click the Next button!',
      highlightedNotes: [],
      noteLabels: false,
      lessonId: 1
    },
    {
      content:
        'That’s right, genius. Notes sound higher as you travel to the right, and lower towards the left. Now it’s time to learn how to identify each one of these black and white keys by name. Let’s start with the white keys.\nWhen you are ready to move on, just click the Next button!',
      highlightedNotes: [],
      noteLabels: false,
      lessonId: 1
    },
    {
      content:
        'If you look closely, you’ll realize that the same 7 notes are repeated over and over. These notes are:\n A B C D E F G\nWhether it’s a teeny little keyboard like the one here, or a full-sized grand piano, the pattern of the notes is the same: A B C D E F G looped over and over again. Easy, right?\nWhen you are ready to move on, just click the Next button!',
      highlightedNotes: [],
      noteLabels: true,
      lessonId: 1
    },
    {
      content:
        'Well you might wonder to yourself, “Gee whiz, [myself], I’m totally fucked without these note labels!” Luckily for you, there are some neat tricks pianists use to help them orient themselves at the keyboard. Take a look at this keyboard once again, paying attention to the ‘grouping’ pattern of the black keys.\nWhen you are ready to move on, just click the Next button!',
      highlightedNotes: [],
      noteLabels: true,
      lessonId: 1
    },
    {
      content:
        'You’re the best. They’re grouped in twos and threes. You can use this consistent, predictable ‘landmark’ to help find the note you want. The first note you’re going to be a master at finding is C. You can think of it as your ‘safe house.’\nWhen you are ready to move on, just click the Next button!',
      highlightedNotes: [],
      noteLabels: true,
      lessonId: 1
    },
    {
      content:
        'See how it’s directly left of the group of two? Beautiful. There’s your safe house. If you want to find any other letter, just move forward in the alphabet (towards the right on the keyboard), or backwards (towards the left). If you get lost, look for your safe house!\nWhen you are ready to move on, just click the Next button!',
      highlightedNotes: [48, 60],
      noteLabels: false,
      lessonId: 1
    },
    {
      content:
        'Let’s put your knowledge to the test. How are you with note identification?',
      highlightedNotes: [],
      noteLabels: false,
      lessonId: 1
    }
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${lessons.length} lessons`)
  console.log(`seeded ${steps.length} steps`)
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
