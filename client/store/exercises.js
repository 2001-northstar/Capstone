import axios from 'axios'

// action-types
const SET_EXERCISES = 'SET_EXERCISES'

// action-creators
const setExercises = exercises => {
  return {
    type: SET_EXERCISES,
    exercises
  }
}

// thunk-creators
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

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXERCISES:
      return action.exercises
    default:
      return state
  }
}
