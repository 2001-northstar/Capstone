//need to advance through steps in array loaded from lesson
//write hook to re render new text

import React, {useEffect, useState} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchSingleLesson} from '../store/lesson'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import styled from 'styled-components'

const LessonOneContainer = props => {
  // declare dispatch function - always when you need dispatch

  const dispatch = useDispatch()
  let [stepNum, setStep] = useState(1)

  // just like map state to props but assigning to a const variable
  const {lesson, step} = useSelector(state => {
    return {
      lesson: state.lesson,
      step: state.step
    }
  })

  // just like component did mount
  useEffect(() => {
    dispatch(fetchSingleLesson(1))
  }, [])

  if (!lesson) {
    return <div>No Lesson Found</div>
  }

  //don't render note labels until step 2 just to try it. or leave it i don't care
  const handleNext = () => {
    setStep(++stepNum)
    //fetchStep(props.stepNum?)
    //Can we dispatch here? Do we need useEffect here as well? -- sure can. just gotta map fetchstep to props & import it ^
  }

  return (
    <div id="lesson-one-container">
      {/* possibly just step.text hooked to state change */}
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
