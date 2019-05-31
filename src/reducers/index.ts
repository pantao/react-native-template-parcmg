import { combineReducers } from 'redux'

import { app } from './app'
import { todo } from './todo'

const rootReducer = combineReducers({
  app,
  todo,
})

// const rootReducer = (state = {}, action) => {
//   return {
//     app: app(state.app, action),
//     todo: app(state.aoto, action),
//   }
// }

export default rootReducer
