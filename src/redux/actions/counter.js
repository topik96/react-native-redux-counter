import * as ACTIONS from '../actionTypes'
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
