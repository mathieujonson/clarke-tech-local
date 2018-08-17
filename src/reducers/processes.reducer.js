import initialState from './initialState'
import { SAVE_PROCESS } from '../actions/actionTypes'

export default function processes(
  previousState = initialState.processes,
  action
) {
  switch (action.type) {
    case SAVE_PROCESS:
      return [ ...previousState,
        {
          name: action.payload.name,
          command: action.payload.command,
          directory: action.payload.directory
        } ]
    default:
      return previousState
  }
}
