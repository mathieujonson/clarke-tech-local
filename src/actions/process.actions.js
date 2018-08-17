import * as types from './actionTypes'

const Store = require('electron-store')
const store = new Store()

export function saveProcess(json) {
  store.set(`processes.${json.name}`, {
    command: json.command,
    directory: json.directory
  })
  return { type: types.PROCESSES_SAVE, payload: json }
}

export function loadProcesses() {
  let processes = store.get('processes')

  let processedProcesses = []
  for(var process in processes) {
    if(processes.hasOwnProperty(process)) {
      processedProcesses.push({
        name: process,
        command: processes[process].command,
        directory: processes[process].directory,
      })
    }
  }

  return { type: types.PROCESSES_GET, payload: processedProcesses }
}
