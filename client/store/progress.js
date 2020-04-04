import axios from 'axios'

const SET_PROGRESS = 'SET_PROGRESS'

const setProgress = progress => ({
  type: SET_PROGRESS,
  progress
})

export const fetchUserProgress = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users/progress')
      dispatch(setProgress(data))
    } catch (err) {
      console.log('fetchUserProgress error', err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return action.progress
    default:
      return state
  }
}
