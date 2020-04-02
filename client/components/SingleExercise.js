import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const SingleExercise = props => {
  return <></>
}

const mapState = state => ({
  lesson: state.lesson
})

export default connect(mapState)(SingleExercise)
