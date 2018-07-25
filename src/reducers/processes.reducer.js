import initialState from './initialState'
import { SAVE_PROCESS } from '../actions/actionTypes'

export default function processes(
  previousState = initialState.processes,
  action
) {
  switch (action.type) {
    case SAVE_PROCESS:
      console.log('in the reducer')
      return action.payload
    default:
      return previousState
  }
}
