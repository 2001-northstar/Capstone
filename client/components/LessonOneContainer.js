import React from 'react'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {Link} from 'react-router-dom'
import {setStep} from '../store'
import styled from 'styled-components'

const LessonOneContainer = props => {
  // declare dispatch function - always when you need dispatch
  const dispatch = useDispatch()

  // just like map state to props but assigning to a const variable
  const {step} = useSelector(state => {
    return {
      step: state.step
    }
  })

  let steps = props.lesson.steps || []

  if (steps.length) {
    steps = props.lesson.steps.map((st, idx) => ({
      text: st.content,
      noteLabels: st.noteLabels,
      highlightedNotes: st.highlightedNotes,
      index: idx
    }))
  }

  const handleNext = () => {
    dispatch(setStep(steps[++step.index]))
  }

  const handlePrevious = () => {
    dispatch(setStep(steps[--step.index]))
  }

  const previous = step.index === 0
  const next = step.index === steps.length - 1

  let newText = step.text.split('\n').map((item, i) => <p key={i}>{item}</p>)

  return (
    <div id="lesson-one-container">
      {newText}
      <button
        type="button"
        onClick={handlePrevious}
        className={`btn btn-primary btn-lg btn-block ${
          previous ? 'disabled' : null
        }`}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleNext}
        className={`btn btn-primary btn-lg btn-block ${
          next ? 'disabled' : null
        }`}
      >
        Next
      </button>

      {next ? (
        <Link to={`/exercise/${props.lesson.id}`}>
          Click here to test your skills!
        </Link>
      ) : null}
    </div>
  )
}

export default LessonOneContainer
