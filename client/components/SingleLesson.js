import React, {useEffect} from 'react' // don't forget to import useEffect
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {fetchLesson} from '../store/lessons'
import styled from 'styled-components'

const SingleLesson = props => {
  // declare dispatch function - always when you need dispatch

  const dispatch = useDispatch()

  // just like map state to props but assigning to a const variable
  const {lesson, user} = useSelector(state => {
    return {
      lesson: state.lesson,
      user: state.user //Why is this greyed out above?
    }
  })

  const exercises = props.lesson.exercises

  // just like component did mount
  useEffect(() => {
    dispatch(fetchLesson(props.match.params.lessonId))
  }, [])

  if (!lesson) {
    return <div>No Lesson Found</div>
  }

  return <></>
}

export default SingleLesson
