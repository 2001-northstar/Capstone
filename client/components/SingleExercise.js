import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Keyboard} from '../components'
import {setActiveNote, setExerciseStep, fetchSingleExercise} from '../store'

const SingleExercise = props => {
  const dispatch = useDispatch()
  const {activeNotes, exercise, exerciseStep} = useSelector(state => {
    return {
      activeNotes: state.activeNotes,
      exercise: state.exercise,
      exerciseStep: state.exerciseStep
    }
  })

  useEffect(() => {
    dispatch(fetchSingleExercise(props.match.params.id))
  }, [])

  const [complete, setComplete] = useState(false)
  const [firstAttempt, setAttempt] = useState(true)
  const [done, setDone] = useState(false)

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
          setAttempt(true)
          setDone(true)
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
      {done ? <div>You did it!</div> : <div>{exerciseStep.content}</div>}
      {firstAttempt ? null : <div>Whoops! Try Again!</div>}
      <Keyboard highlightedNotes={[]} />
      {complete ? (
        <>
          <div>Lesson Progress Saved!</div>
          <Link to={`/lesson/${exercise.id + 1}`}>Next Lesson</Link>
          <Link to="/lesson">Back to Lessons List</Link>
        </>
      ) : null}
    </>
  )
}

export default SingleExercise
