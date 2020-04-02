import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import lesson from './lesson'
import lessons from './lessons'
import step from './step'
import activeNotes from './activeNotes'

const reducer = combineReducers({user, lessons, lesson, step, activeNotes})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './lesson'
export * from './step'
export * from './lessons'
export * from './activeNotes'
