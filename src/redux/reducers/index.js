import { combineReducers } from 'redux'
import Counter from './counter'
import Hello from './hello'

const reducers = combineReducers({
  count: Counter,
  hello: Hello
})

export default reducers
