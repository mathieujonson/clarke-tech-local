import * as types from './actionTypes'

const Store = require('electron-store')
const store = new Store()

export function saveProcess(json) {
  store.set(`processes.${json.name}`, {
    command: json.command,
    directory: json.directory
  })
  return { type: types.SAVE_PROCESS, payload: json }
}
