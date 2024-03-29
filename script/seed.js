'use strict'

const db = require('../server/db')
const {
  User,
  Lesson,
  Step,
  Exercise,
  Song,
  Progress,
  ExerciseStep
} = require('../server/db/models')

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
      name: 'I. The Basics',
      overview: 'Learn what keys are.',
      numOfSteps: 7
    },
    {
      name: 'II. Scales',
      overview: 'Learn what a scale is.',
      numOfSteps: 6
    },
    {
      name: 'III. Chords',
      overview: 'Learn what a chords is.',
      numOfSteps: 0
    },
    {
      name: 'IV. Modes',
      overview: 'Learn about Major, Minor, and more.',
      numOfSteps: 0
    },
    {
      name: 'V. Arpeggios',
      overview: 'It is not a type of pasta.',
      numOfSteps: 0
    },
    {
      name: 'VI. Playing with Both Hands',
      overview: 'Ready to get fancy?',
      numOfSteps: 0
    }
  ])

  const exercises = await Exercise.bulkCreate([
    {
      name: 'I. The Basics',
      overview: 'Identify notes on the keyboard.',
      numOfSteps: 2
    },
    {
      name: 'II. Scales',
      overview: 'Practice some scales',
      numOfSteps: 2
    },
    {
      name: 'III. Chords',
      overview: 'Practice forming basic chords',
      numOfSteps: 2
    },
    {
      name: 'IV. Modes',
      overview: 'Identify Major and Minor chords.',
      numOfSteps: 2
    },
    {
      name: 'V. Arpeggios',
      overview: 'Is an arpeggio a type of noodle?',
      numOfSteps: 2
    },
    {
      name: 'IV. Playing with both hands',
      overview: 'Let us get your brain moving.',
      numOfSteps: 2
    }
  ])

  const progressRows = await Progress.bulkCreate([
    {
      userId: 1,
      lessonId: 1
    },
    {
      userId: 1,
      lessonId: 2
    },
    {
      userId: 1,
      lessonId: 3
    },
    {
      userId: 1,
      lessonId: 4
    },
    {
      userId: 1,
      lessonId: 5
    },
    {
      userId: 1,
      lessonId: 6
    },
    {
      userId: 2,
      lessonId: 1
    },
    {
      userId: 2,
      lessonId: 2
    },
    {
      userId: 2,
      lessonId: 3
    },
    {
      userId: 2,
      lessonId: 4
    },
    {
      userId: 2,
      lessonId: 5
    },
    {
      userId: 2,
      lessonId: 6
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
        'If you look closely, you’ll realize that the same 7 notes are repeated over and over. These notes are:\nA B C D E F G\nWhether it’s a teeny little keyboard like the one here, or a full-sized grand piano, the pattern of the notes is the same: A B C D E F G looped over and over again. Easy, right?\nWhen you are ready to move on, just click the Next button!',
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
    },

    {
      content:
        'Let’s get fancy.\nYou may have heard about musical scales. A scale is simply a group of pitches...specifically, an organized group of pitches. Ever been part of ‘the wave’ at Yankee Stadium? Neither have I. But it’s kind of like that, anything is possible with our imaginations.',
      highlightedNotes: [],
      noteLabels: false,
      lessonId: 2
    },
    {
      content:
        'Scales move in consecutive steps, one after another. Us heavy hitters describe the distance between two notes that are a ‘step’ apart as the interval of a second (2nd). For all intents and purposes, steps and 2nds mean the same thing.\nLook below for an example of a 2nd. Can you use your imagination and identify others on the keyboard?',
      highlightedNotes: [55, 57],
      noteLabels: false,
      lessonId: 2
    },
    {
      content:
        'We’re about to build our first 5 note scale: an ascending C scale. “What does that even fucking mean” you might ask. Well listen here, you little shit, and let me break this down for you.\n1. Ascending means the pitches are organized from low to high - in other words, we’re travelling by 2nds on the keyboard from left to right.\n2. C means the first note we play is C (if it’s an F scale, the first would be F).\n3. A scale is what silently reminds you in the morning that you need to cut back on those oreos and fried cheese curds.',
      highlightedNotes: [],
      noteLabels: true,
      lessonId: 2
    },
    {
      content:
        'A 5 note ascending C scale consists of the notes C, D, E, F, and G. Try it for yourself below and play a 5 note scale starting on C.',
      highlightedNotes: [48],
      noteLabels: false,
      lessonId: 2
    },
    {
      content:
        'What goes up must come back down. A descending scale simply moves down in 2nds. Try playing a descending scale, starting from G.',
      highlightedNotes: [55],
      noteLabels: false,
      lessonId: 2
    },
    {
      content:
        'You can really impress the folks back home by playing a continuous sequence of ascending AND descending notes. For our final challenge: try starting a scale starting from C, up to G, then bring it back home to C.',
      highlightedNotes: [],
      noteLabels: false,
      lessonId: 2
    }
  ])

  const exerciseSteps = await ExerciseStep.bulkCreate([
    {
      content: 'Find a C.',
      answer: 48,
      answer2: 60,
      exerciseId: 1
    },
    {
      content: 'Nice job, Einstein. Now find a D.',
      answer: 50,
      answer2: 62,
      exerciseId: 1
    },
    {
      content: 'Correctomundo. Find an E.',
      answer: 52,
      answer2: 64,
      exerciseId: 1
    },
    {
      content: 'Find a C again. Your safe house, remember?',
      answer: 48,
      answer2: 60,
      exerciseId: 1
    },
    {
      content: 'All right, genius. Find a B.',
      answer: 59,
      answer2: 59,
      exerciseId: 1
    },
    {
      content: 'Congrats! Find an F.',
      answer: 53,
      answer2: 65,
      exerciseId: 1
    },
    {
      content: 'Now find a C. Yes, again.',
      answer: 48,
      answer2: 60,
      exerciseId: 1
    },
    {
      content: "Great, you're done! Just kidding. Find an A.",
      answer: 57,
      answer2: 57,
      exerciseId: 1
    },
    {
      content: "Think you're a wiseguy, huh? Find a G.",
      answer: 55,
      answer2: 55,
      exerciseId: 1
    },
    {
      content: 'File that MENSA application yet? Finally, find a D.',
      answer: 50,
      answer2: 62,
      exerciseId: 1
    }
  ])

  const songs = await Song.bulkCreate([
    {
      title: 'Mary Had A Little Lamb',
      artist: 'Mother Goose',
      level: '★',
      description: 'The thrilling adventures of Mary & her pet lamb.',
      notes: [
        {note: 48, order: 26},
        {note: 50, order: 25},
        {note: 52, order: 24},
        {note: 50, order: 23},
        {note: 50, order: 22},
        {note: 52, order: 21},

        {note: 52, order: 20},
        {note: 52, order: 19},
        {note: 52, order: 18},
        {note: 50, order: 17},
        {note: 48, order: 16},
        {note: 50, order: 15},
        {note: 52, order: 14},

        {note: 55, order: 13},
        {note: 55, order: 12},
        {note: 52, order: 11},
        {note: 50, order: 10},
        {note: 50, order: 9},
        {note: 50, order: 8},

        {note: 52, order: 7},
        {note: 52, order: 6},
        {note: 52, order: 5},
        {note: 50, order: 4},
        {note: 48, order: 3},
        {note: 50, order: 2},
        {note: 52, order: 1}
      ],
      answer: [
        52,
        50,
        48,
        50,
        52,
        52,
        52,
        50,
        50,
        50,
        52,
        55,
        55,
        52,
        50,
        48,
        50,
        52,
        52,
        52,
        52,
        50,
        50,
        52,
        50,
        48
      ]
    },
    {
      title: 'Do-Re-Mi',
      artist: 'Sound Of Music',
      level: '★',
      description: 'Pretty basic scale.',
      notes: [
        {note: 60, order: 8},
        {note: 59, order: 7},
        {note: 57, order: 6},
        {note: 55, order: 5},
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53, 55, 57, 59, 60]
    },
    {
      title: 'Jingle Bells',
      artist: 'Your Neighborhood Children',
      level: '★',
      description: "It's the most wonderful time of the year!",
      notes: [
        {note: 55, order: 26},
        {note: 50, order: 25},
        {note: 52, order: 24},
        {note: 50, order: 23},
        {note: 50, order: 22},
        {note: 52, order: 21},
        {note: 52, order: 20},
        {note: 52, order: 19},
        {note: 52, order: 18},
        {note: 52, order: 17},
        {note: 53, order: 16},
        {note: 53, order: 15},
        {note: 53, order: 14},
        {note: 53, order: 13},
        {note: 53, order: 12},
        {note: 52, order: 11},
        {note: 50, order: 10},
        {note: 48, order: 9},
        {note: 55, order: 8},
        {note: 52, order: 7},
        {note: 52, order: 6},
        {note: 52, order: 5},
        {note: 52, order: 4},
        {note: 52, order: 3},
        {note: 52, order: 2},
        {note: 52, order: 1}
      ],
      answer: [
        52,
        52,
        52,
        52,
        52,
        52,
        52,
        55,
        48,
        50,
        52,
        53,
        53,
        53,
        53,
        53,
        52,
        52,
        52,
        52,
        52,
        50,
        50,
        52,
        50,
        55
      ]
    },
    {
      title: 'Baby Shark',
      artist: 'Pinkfong',
      level: '★',
      description: "Doo-doo-doo, dang that's catchy.",
      notes: [
        {note: 64, order: 30},
        {note: 65, order: 29},
        {note: 65, order: 28},

        {note: 65, order: 27},
        {note: 65, order: 26},
        {note: 65, order: 25},
        {note: 65, order: 24},
        {note: 65, order: 23},
        {note: 65, order: 22},
        {note: 65, order: 21},
        {note: 62, order: 20},
        {note: 60, order: 19},

        {note: 65, order: 18},
        {note: 65, order: 17},
        {note: 65, order: 16},
        {note: 65, order: 15},
        {note: 65, order: 14},
        {note: 65, order: 13},
        {note: 65, order: 12},
        {note: 62, order: 11},
        {note: 60, order: 10},

        {note: 65, order: 9},
        {note: 65, order: 8},
        {note: 65, order: 7},
        {note: 65, order: 6},
        {note: 65, order: 5},
        {note: 65, order: 4},
        {note: 65, order: 3},
        {note: 62, order: 2},
        {note: 60, order: 1}
        // note 60 is the first note to appear on the bottom of the note container
      ],
      answer: [
        // note 60 is the first to play in the song
        60,
        62,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        60,
        62,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        60,
        62,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        65,
        64
      ]
    },
    {
      title: 'Twinkle, Twinkle, Little Star',
      artist: 'Traditional',
      level: '★★',
      description: 'How I wonder what you are.',
      notes: [
        {note: 48, order: 14},
        {note: 50, order: 13},
        {note: 50, order: 12},
        {note: 52, order: 11},
        {note: 52, order: 10},
        {note: 53, order: 9},
        {note: 53, order: 8},
        {note: 55, order: 7},
        {note: 57, order: 6},
        {note: 57, order: 5},
        {note: 55, order: 4},
        {note: 55, order: 3},
        {note: 48, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 48, 55, 55, 57, 57, 55, 53, 53, 52, 52, 50, 50, 48]
    },
    {
      title: 'Canon in D',
      artist: 'Pachelbel',
      level: '★★',
      description: '90% chance you heard this at a wedding.',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Dance of the Sugar Plum Fairy',
      artist: 'Tchaikovsky',
      level: '★★',
      description: 'A Nutcracker classic.',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Imagine',
      artist: 'John Lennon',
      level: '★★',
      description: "You're on your way to Grammy Hall of Fame.",
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: "I Don't Like Mondays",
      artist: 'The Boomtown Rats',
      level: '★★',
      description: 'Question is, who does?',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Enter Sandman',
      artist: 'Metallica',
      level: '★★★',
      description: 'Oh, so you like metal? Hardcore.',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Tiny Dancer',
      artist: 'Elton John',
      level: '★★★',
      description: 'Hold me closer.',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Piano Man',
      artist: 'Billy Joel',
      level: '★★★',
      description: 'Sing us a song tonight.',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      level: '★★★',
      description: 'Is this the real life? Is this just fantasy?',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    },
    {
      title: 'Prelude in C, BWV 846',
      artist: 'J.S. Bach',
      level: '★★★',
      description: 'Guaranteed to impress all your friends on Zoom.',
      notes: [
        {note: 53, order: 4},
        {note: 52, order: 3},
        {note: 50, order: 2},
        {note: 48, order: 1}
      ],
      answer: [48, 50, 52, 53]
    }
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${lessons.length} lessons`)
  console.log(`seeded ${exercises.length} exercises`)
  console.log(`seeded ${songs.length} songs`)
  console.log(`seeded ${steps.length} steps`)
  console.log(`seeded ${progressRows.length} progress rows`)
  console.log(`seeded ${exerciseSteps.length} exercise steps`)
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
