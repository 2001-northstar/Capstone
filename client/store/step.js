//need to figure out how to move through step array on a single lesson

import axios from 'axios'

const SET_STEP = 'SET_STEP'

export const setStep = step => ({
  type: SET_STEP,
  step
})

//do we get the steps array from the current lesson on state?

const initialState = {
  text: '',
  noteLabels: false,
  highlightedNotes: [],
  index: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP:
      return action.step
    default:
      return state
  }
}
