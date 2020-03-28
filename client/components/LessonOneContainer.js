import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchSingleLesson} from '../store/lesson'
import StepOne from './StepOne'
import styled from 'styled-components'

const LessonOneContainer = props => {
  // declare dispatch function - always when you need dispatch

  const dispatch = useDispatch()

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

  const handleNext = () => {}

  return (
    <>
      {/* <StepOne lesson={lesson} />
        <button type="button" onClick={handleNext} className="btn btn-primary">
          Next
        </button> */}
    </>
  )
}

export default LessonOneContainer
