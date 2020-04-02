import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const SingleExercise = props => {
  const {lesson, user} = useSelector(state => {
    return {lesson: state.lesson, user: state.user}
  })

  const exercise = lesson.exercises || []
  return (
    <>
      <div>This would be an exercise.</div>
      {exercise.length ? (
        <div>{exercise[0].content}</div>
      ) : (
        <div>{`No Exercise for Lesson ${lesson.id}`}</div>
      )}
    </>
  )
}

export default SingleExercise
