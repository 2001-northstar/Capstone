import axios from 'axios'

// action-types
const SET_SINGLE_LESSON = 'SET_SINGLE_LESSON'

// action-creators
const setSingleLesson = lesson => {
  return {
    type: SET_SINGLE_LESSON,
    lesson
  }
}

// thunk-creators
export const fetchSingleLesson = lessonId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/lessonss/${lessonId}`)
      dispatch(setSingleLesson(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducers
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_LESSON:
      return action.lesson
    default:
      return state
  }
}
