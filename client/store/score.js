import axios from 'axios'

// action-types
const SET_SCORES = 'SET_SCORES'

// action-creators
const setScores = scores => {
  return {
    type: SET_SCORES,
    scores
  }
}

// thunk-creators
export const fetchScores = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/user/${userId}/score`)
      dispatch(setScores(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORES:
      return action.scores //??
    default:
      return state
  }
}
