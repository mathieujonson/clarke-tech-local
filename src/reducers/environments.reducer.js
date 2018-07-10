import initialState from './initialState'
import { GET_ENVIRONMENTS_SUCCESS } from '../actions/actionTypes'

export default function environments(
  previousState = initialState.environments,
  action
) {
  switch (action.type) {
    case GET_ENVIRONMENTS_SUCCESS:
      console.log('FETCH_STUFF Action')
      return action.payload
    default:
      return previousState
  }
}
