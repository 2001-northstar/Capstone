import axios from 'axios'
import {setExerciseStep} from '../store'

// action-types
const SET_SINGLE_EXERCISE = 'SET_SINGLE_EXERCISE'

// action-creators
const setSingleExercise = exercise => {
  return {
    type: SET_SINGLE_EXERCISE,
    exercise
  }
}

// thunk-creators
export const fetchSingleExercise = exerciseId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/exercises/${exerciseId}`)
      dispatch(setSingleExercise(data))
      if (data.exerciseSteps.length) {
        const step1 = data.exerciseSteps[0]
        dispatch(
          setExerciseStep({
            content: step1.content,
            answer: step1.answer,
            answer2: step1.answer2,
            index: 0
          })
        )
      }
    } catch (err) {
      console.log(err)
    }
  }
}

// reducers
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_EXERCISE:
      return action.exercise
    default:
      return state
  }
}
