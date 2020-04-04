import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Keyboard} from '../components'

const SingleExercise = props => {
  const dispatch = useDispatch()
  const {lesson, user} = useSelector(state => {
    return {lesson: state.lesson, user: state.user}
  })

  const exercise = lesson.exercises || []

  const [complete, setComplete] = useState(false)

  const handleCompleted = async () => {
    await axios.put(`/api/lessons/${lesson.id}`)
    setComplete(true)
  }

  const answers = [
    [48, 134],
    [50, 146],
    [62],
    [48, 134],
    [110],
    [74],
    [48, 134],
    [98],
    [86],
    [50, 146]
  ]

  return (
    <>
      {exercise.length ? (
        <div>{exercise[0].content}</div>
      ) : (
        <div>{`No Exercise for Lesson ${lesson.id}`}</div>
      )}
      <Keyboard highlightedNotes={[]} />
      <button type="button" onClick={handleCompleted}>
        Mark Lesson as Completed
      </button>
      {complete ? (
        <>
          <div>Lesson Progress Saved!</div>
          <Link to={`/lesson/${lesson.id + 1}`}>Next Lesson</Link>
          <Link to="/lesson">Back to Lessons List</Link>
        </>
      ) : null}
    </>
  )
}

export default SingleExercise
