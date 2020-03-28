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
  let [step, setStep] = useState(1)

  // just like map state to props but assigning to a const variable
  const {lesson} = useSelector(state => {
    return {
      lesson: state.lesson
    }
  })

  // just like component did mount
  useEffect(() => {
    dispatch(fetchSingleLesson(1))
  }, [])

  if (!lesson) {
    return <div>No Lesson Found</div>
  }

  const handleNext = () => {
    setStep(++step)
    console.log('STEP: ', step)
  }

  return (
    <>
      <div id="lesson-one-container">
        {step === 1 ? (
          <StepOne lesson={lesson} />
        ) : step === 2 ? (
          <StepTwo lesson={lesson} />
        ) : (
          <div>Got Nothing</div>
        )}
        <button
          type="button"
          onClick={handleNext}
          className="btn btn-primary btn-lg btn-block"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default LessonOneContainer
