import {isMainThread, workerData, parentPort} from 'worker_threads';
import {Solver} from './solver.js';
// Worker Thread Code
// Ensure this is a worker thread and not the main process thread
if(!isMainThread){
  //Output for each day being processed
  let output = [];
  // Solve each day one at a time
  for(let date of workerData){
    // Solve a day and add the output to the array
    let solver = new Solver(date.month, date.day);
    solver.findSolutions(date.showAll);
    output.push({day: date.day, month: date.month, output: solver.createSolutionOutput()});
  }
  // Send the outputs back to the main thread
  parentPort.postMessage(output);
}