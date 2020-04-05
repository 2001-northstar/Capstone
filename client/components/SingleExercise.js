import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Keyboard} from '../components'
import {setActiveNote} from '../store'

const SingleExercise = props => {
  const dispatch = useDispatch()
  const {lesson, user, activeNotes} = useSelector(state => {
    return {
      lesson: state.lesson,
      user: state.user,
      activeNotes: state.activeNotes
    }
  })

  const exercise = lesson.exercises || []

  const [complete, setComplete] = useState(false)
  const [firstAttempt, setAttempt] = useState(true)

  const handleCompleted = async () => {
    await axios.put(`/api/lessons/${lesson.id}`)
    setComplete(true)
  }

  const answer = 48
  const answer2 = 60

  //need to set answer 2 = answer if no answer2 in model or here

  //if activenotes = [] first attempt so display nothing
  //if correct advance with correct! before text, set active note back to []
  //if wrong display try again, maybe shake keyboard animation?

  //for scale: must get each step on first attempt or it sends you back to the start!

  useEffect(
    () => {
      if (activeNotes[0] === answer || activeNotes[0] === answer2) {
        //advance step after time delay to read correct statement?
        dispatch(setActiveNote([]))
      } //else setAttempt(false)
    },
    [activeNotes]
  )

  return (
    <>
      {exercise.length ? (
        <div>{exercise[0].content}</div>
      ) : (
        <div>{`No Exercise for Lesson ${lesson.id}`}</div>
      )}
      <div>Find a C</div>
      {firstAttempt ? null : <div>Whoops! Try Again!</div>}
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
