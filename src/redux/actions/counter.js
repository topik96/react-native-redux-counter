import * as ACTIONS from '../types'

export const incrementCounter = () => {
  return {
    type: ACTIONS.INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: ACTIONS.DECREMENT
  }
}

export const setCounter = receiveValue => {
  return {
    type: ACTIONS.SET_VALUE,
    payload: receiveValue
  }
}
