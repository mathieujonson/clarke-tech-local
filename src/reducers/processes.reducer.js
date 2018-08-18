import initialState from './initialState'
import {
  PROCESSES_SAVE,
  PROCESSES_GET,
  PROCESSES_REMOVE,
  PROCESSES_UPDATE_RUNNING
} from '../actions/actionTypes'

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
          directory: action.payload.directory,
          isRunning: false
        }
      ]
    case PROCESSES_GET:
      return action.payload
    case PROCESSES_REMOVE:
      return previousState.filter(process => process.name !== action.payload)
    case PROCESSES_UPDATE_RUNNING:
      let updatedState = previousState.filter(
        process => process.name !== action.payload.name
      )
      updatedState.push(action.payload)
      return updatedState
    default:
      return previousState
  }
}
