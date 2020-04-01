import axios from 'axios'

// action-types
const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE'

// action-creators
export const setActiveNote = activeNote => {
  return {
    type: SET_ACTIVE_NOTE,
    activeNote
  }
}

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_NOTE:
      return [...state, action.activeNote]
    default:
      return state
  }
}
