import axios from 'axios'

const SET_EXERCISE_STEP = 'SET_EXERCISE_STEP'

export const setExerciseStep = step => ({
  type: SET_EXERCISE_STEP,
  step
})

const initialState = {
  content: '',
  answer: 0,
  answer2: 0,
  index: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXERCISE_STEP:
      return action.step
    default:
      return state
  }
}
