import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const AllExercises = props => {
  return (
    <>
      <h4>Exercises</h4>
      {/* <ul>
        {props.lesson.exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul> */}
    </>
  )
}

// const mapState = (state) => ({
//   exercise: state.exercise,
// })

export default AllExercises
