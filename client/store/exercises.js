import axios from 'axios'

const SET_EXERCISES = 'SET_EXERCISES'

const setExercises = exercises => {
  return {
    type: SET_EXERCISES,
    exercises
  }
}

export const fetchExercises = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/exercises')
      dispatch(setExercises(data))
    } catch (err) {
      console.log('fetchExercises error', err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXERCISES:
      return action.exercises
    default:
      return state
  }
}
