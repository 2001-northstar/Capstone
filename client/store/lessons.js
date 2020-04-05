import axios from 'axios'
import {setProgress} from '../store'

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
      let lessons = await axios.get('/api/lessons')
      const progressArr = await axios.get('/api/users/progress')
      dispatch(setProgress(progressArr.data))
      dispatch(setLessons(lessons.data))
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
