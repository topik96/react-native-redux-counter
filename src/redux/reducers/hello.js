import * as ACTION from '../types'
const initState = {
  message: 'HAI SELAMAT DATANG'
}

const Hello = (state = initState.message, action) => {
  console.log(action.payload)
  switch (action.type) {
    case ACTION.SAY_HELLO:
      return state
    case ACTION.UP:
      return action.payload
    case ACTION.DOWN:
      return action.payload
    default:
      return state
  }
}

export default Hello
