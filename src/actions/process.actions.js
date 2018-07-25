import * as types from './actionTypes'

export function saveProcess(json) {
  console.log("here in the action!")
  return { type: types.SAVE_PROCESS, payload: json }
}
