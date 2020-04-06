import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Keyboard} from '../components'
import {setActiveNote, setExerciseStep} from '../store'

const SingleExercise = props => {
  const dispatch = useDispatch()
  const {activeNotes, exercise, exerciseStep} = useSelector(state => {
    return {
      activeNotes: state.activeNotes,
      exercise: state.exercise,
      exerciseStep: state.exerciseStep
    }
  })

  const [complete, setComplete] = useState(false)
  const [firstAttempt, setAttempt] = useState(true)

  const handleCompleted = async () => {
    await axios.put(`/api/lessons/${exercise.id}`)
    setComplete(true)
  }

  let steps = exercise.exerciseSteps || []

  if (steps.length) {
    steps = steps.map((st, i) => ({
      content: st.content,
      answer: st.answer,
      answer2: st.answer2,
      index: i
    }))
  }

  //for scale: must get each step on first attempt or it sends you back to the start!

  useEffect(
    () => {
      if (
        activeNotes[0] === exerciseStep.answer ||
        activeNotes[0] === exerciseStep.answer2
      ) {
        if (exerciseStep.index === steps.length - 1) {
          handleCompleted()
        } else {
          dispatch(setExerciseStep(steps[++exerciseStep.index]))
          dispatch(setActiveNote([]))
          setAttempt(true)
        }
      } else if (!activeNotes[0]) {
        console.log('first run!')
      } else {
        setAttempt(false)
      }
    },
    [activeNotes]
  )

  return (
    <>
      <div className="container my-3 py-3 text-center">
        <p className="lead">{exerciseStep.content}</p>

        {firstAttempt ? null : (
          <h3 style={{color: '#6B9AC4'}} className="my-3 py-3 text-center">
            Whoops! Try Again!
          </h3>
        )}
      </div>
      <Keyboard highlightedNotes={[]} />
      {complete ? (
        <>
          <div className="container my-2 py-2">
            <p className="lead mt-3">
              <strong>Lesson Progress Saved!</strong>
            </p>
          </div>
          <div className="my-1 py-1">
            <Link
              to={`/lesson/${exercise.id + 1}`}
              className="m-1 btn btn-outline-primary"
            >
              Next Lesson
            </Link>
            <Link to="/lesson" className="m-1 btn btn-outline-secondary">
              Back to Lessons List
            </Link>
          </div>
        </>
      ) : null}
    </>
  )
}

export default SingleExercise
