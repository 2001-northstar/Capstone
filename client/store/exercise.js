import axios from 'axios'
import {setStep} from './step'

const SET_SINGLE_EXERCISE = 'SET_SINGLE_EXERCISE'

const setSingleExercise = exercise => {
  return {
    type: SET_SINGLE_EXERCISE,
    exercise
  }
}

export const fetchSingleExercise = exerciseId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/exercises/${exerciseId}`)
      dispatch(setSingleExercise(data))
      if (data.steps.length) {
        const step1 = data.steps[0]
        dispatch(
          setStep({
            text: step1.content,
            noteLabels: step1.noteLabels,
            highlightedNotes: step1.highlightedNotes,
            index: 0
          })
        )
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_EXERCISE:
      return action.exercise
    default:
      return state
  }
}
