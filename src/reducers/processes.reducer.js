import initialState from './initialState'
import { PROCESSES_SAVE, PROCESSES_GET } from '../actions/actionTypes'

export default function processes(
  previousState = initialState.processes,
  action
) {
  switch (action.type) {
    case PROCESSES_SAVE:
      return [
        ...previousState,
        {
          name: action.payload.name,
          command: action.payload.command,
          directory: action.payload.directory
        }
      ]
    case PROCESSES_GET:
      return action.payload
    default:
      return previousState
  }
}
