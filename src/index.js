import { Solver } from './solver.js';

// Check that the right number of arguments are present in the command
if (process.argv.length < 4){
  console.log('Please specify month and day.');
  process.exit(1);
}

// Get the month and day from the argv values
const month = process.argv[2];
const day = process.argv[3];
const showTime = process.argv.indexOf('--time') > -1;
const showAll = process.argv.indexOf('--all') > -1;


let solver = new Solver(month, day);
let startTime;
let totalTime;
if(showTime)
  startTime = Date.now();

solver.findSolutions(showAll);

if(startTime)
  totalTime = Date.now() - startTime;

solver.printSolutions();

if(totalTime)
  console.log("Execution Time:", totalTime / 1000, "s");