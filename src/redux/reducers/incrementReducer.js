import * as ACTION from '../actionTypes'
initState = {
  count: 50
}
const incrementReducers = (state = initState.count, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return state + 1
    case ACTION.DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default incrementReducers
