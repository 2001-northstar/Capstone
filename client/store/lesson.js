import axios from 'axios'
import {setStep} from './step'

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
      const {data} = await axios.get(`/api/lessons/${lessonId}`)
      dispatch(setSingleLesson(data))
      if (data.steps.length) {
        const step1 = data.steps[0]
        dispatch(
          setStep({
            text: step1.content,
            noteLabels: step1.noteLabels,
            highlightedNotes: step1.highlightedNotes,
            index: 0
          })
        )
      }
    } catch (err) {
      console.log(err)
    }
  }
}

//reducers
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_LESSON:
      return action.lesson
    default:
      return state
  }
}
