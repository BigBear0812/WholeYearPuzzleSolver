import { Graph } from './graph.js';

// Check that the right number of arguments are present in the command
if (process.argv.length < 4){
  console.log('Please specify month and day.');
  process.exit(1);
}

// Get the file name from the argv values for year and day
const month = process.argv[2];
const day = process.argv[3];
const showTime = process.argv[4];


let graph = new Graph(month, day);
let startTime;
let totalTime;
if(showTime === "time")
  startTime = Date.now();

graph.findSolutions();

if(startTime)
  totalTime = Date.now() - startTime;

graph.printSolutions();

if(totalTime)
  console.log("Execution Time:", totalTime / 1000, "s");