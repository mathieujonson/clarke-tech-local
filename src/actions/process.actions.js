import * as types from './actionTypes'

export function saveProcess(json) {
  return { type: types.SAVE_PROCESS, payload: json }
}
