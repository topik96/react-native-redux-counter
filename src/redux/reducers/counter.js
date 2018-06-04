import * as ACTION from '../types'
initState = {
  count: 50
}
const counter = (state = initState.count, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return state + 1
    case ACTION.DECREMENT:
      return state - 1
    case ACTION.SET_VALUE:
      return action.payload
    default:
      return state
  }
}

export default counter
