import * as types from "./actionTypes";

var nodeConsole = require("console");
var console = new nodeConsole.Console(process.stdout, process.stderr);

var exec = require("child_process").exec;

const Store = require("electron-store");
const store = new Store();

const endProcess = processId => {
  const command = "pkill -9 -P " + processId;
  console.log(command);

  const killer = exec(command);

  killer.stdout.on("data", function(data) {
    console.log(data);
  });
  killer.stderr.on("data", function(data) {
    console.log(data);
  });
};

const startProcess = process => {
  const child = exec(process.command, { cwd: process.directory });

  // Append the pid and a function to termiate the child process
  process.pid = child.pid;

  // Attach to the child console
  child.stdout.on("data", function(data) {
    console.log(data);
  });
  child.stderr.on("data", function(data) {
    console.log(data);
  });
  child.on("close", function(code) {
    console.log("onClose " + process.name);
  });
};

export function updateRunning(process) {
  if (process.isRunning) {
    console.log("Ending " + process.name);
    endProcess(process.pid);
  } else {
    console.log("Starting " + process.name);
    startProcess(process);
  }

  process.isRunning = !process.isRunning;

  return {
    type: types.PROCESSES_UPDATE_RUNNING,
    payload: process
  };
}

export function saveProcess(json) {
  store.set(`processes.${json.name}`, {
    command: json.command,
    directory: json.directory
  });
  return { type: types.PROCESSES_SAVE, payload: json };
}

export function removeProcess(name) {
  store.delete(`processes.${name}`);
  return { type: types.PROCESSES_REMOVE, payload: name };
}

export function loadProcesses() {
  let processes = store.get("processes");

  let processedProcesses = [];
  for (var process in processes) {
    if (processes.hasOwnProperty(process)) {
      processedProcesses.push({
        name: process,
        command: processes[process].command,
        directory: processes[process].directory,
        isRunning: false
      });
    }
  }

  return { type: types.PROCESSES_GET, payload: processedProcesses };
}
