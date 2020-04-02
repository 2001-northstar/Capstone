import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import updateCompleted from '../store'

const SingleExercise = props => {
  const dispatch = useDispatch()
  const {lesson, user} = useSelector(state => {
    return {lesson: state.lesson, user: state.user}
  })

  const exercise = lesson.exercises || []

  const [complete, setComplete] = useState(false)

  const handleCompleted = () => {
    dispatch(updateCompleted(lesson.id))
    setComplete(true)
  }

  return (
    <>
      <div>This would be an exercise.</div>
      {exercise.length ? (
        <div>{exercise[0].content}</div>
      ) : (
        <div>{`No Exercise for Lesson ${lesson.id}`}</div>
      )}
      <button type="button" onClick={handleCompleted}>
        Mark Lesson as Completed
      </button>
      {complete ? <div>Lesson Progress Saved!</div> : null}
    </>
  )
}

export default SingleExercise
