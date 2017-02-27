import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/reducers'

const logger = createLogger()

const initStore = () => {
  return createStore(
    reducers,
    applyMiddleware(thunkMiddleware, logger),
   )
}

export default initStore
