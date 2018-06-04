import * as ACTION from '../types'

export const tapUP = () => {
  return {
    type: ACTION.UP,
    payload: 'tap tombol up'
  }
}
export const tapDOWN = () => {
  return {
    type: ACTION.DOWN,
    payload: 'tap tombol down'
  }
}
