import { combineReducers } from 'redux'
import FirebaseReducer from './FirebaseReducer'

const reducers = combineReducers({
  data: FirebaseReducer,
})

export default reducers
