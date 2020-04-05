import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import lesson from './lesson'
import lessons from './lessons'
import exercises from './exercises'
import exercise from './exercise'
import step from './step'
import userinfo from './userinfo'
import song from './song'
import songs from './songs'
import activeNotes from './activeNotes'
import progress from './progress'

const reducer = combineReducers({
  user,
  lessons,
  lesson,
  exercises,
  exercise,
  step,
  activeNotes,
  userinfo,
  songs,
  song,
  progress
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './lesson'
export * from './step'
export * from './lessons'
export * from './exercises'
export * from './exercise'
export * from './userinfo'
export * from './song'
export * from './songs'
export * from './activeNotes'
export * from './progress'
