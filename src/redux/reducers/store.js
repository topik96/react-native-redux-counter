import { createStore, combineReducers } from 'redux'
import IncrementReducers from './incrementReducer'

const rootReducers = combineReducers({
  count: IncrementReducers
})
const store = createStore(rootReducers)

export default store
