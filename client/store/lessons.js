import axios from 'axios'

// action-types
const SET_LESSONS = 'SET_LESSONS'

// action-creators
const setLessons = lessons => {
  return {
    type: SET_LESSONS,
    lessons
  }
}

// thunk-creators
export const fetchLessons = () => {
  return async dispatch => {
    try {
      let {data} = await axios.get('/api/lessons')
      const progressArr = await axios.get('/api/users/progress')
      data.progress = progressArr.data
      dispatch(setLessons(data))
    } catch (err) {
      console.log('fetchLessons error', err)
    }
  }
}

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LESSONS:
      return action.lessons
    default:
      return state
  }
}
