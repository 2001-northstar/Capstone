//need to advance through steps in array loaded from lesson

import React, {useEffect, useState} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchSingleLesson} from '../store/lesson'
import {setStep} from '../store/step'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import styled from 'styled-components'

const LessonOneContainer = props => {
  // declare dispatch function - always when you need dispatch
  const dispatch = useDispatch()

  // just like map state to props but assigning to a const variable
  const {lesson, step} = useSelector(state => {
    return {
      lesson: state.lesson,
      step: state.step
    }
  })

  //just like component did mount
  useEffect(() => {
    dispatch(fetchSingleLesson(props.match.params.id))
  }, [])

  const steps = lesson.steps.map(step => ({
    text: step.text,
    noteLabels: step.noteLabels,
    highlightedNotes: step.highlightedNotes
  }))

  let currentStep = 0
  dispatch(setStep(steps[0]))
  //let [stepNum, setStep] = useState(1)

  // if (!lesson) {
  //   return <div>No Lesson Found</div>
  // }

  const handleNext = () => {
    dispatch(setStep(steps[++currentStep]))
    //setStep(++stepNum)
  }

  return (
    <div id="lesson-one-container">
      {step.text}
      {/* {step === 1 ? (
          <StepOne lesson={lesson} />
        ) : step === 2 ? (
          <StepTwo lesson={lesson} />
        ) : (
          <div>Got Nothing</div>
        )} */}
      <button
        type="button"
        onClick={handleNext}
        className="btn btn-primary btn-lg btn-block"
      >
        Next
      </button>{' '}
      */}
    </div>
  )
}

export default LessonOneContainer
