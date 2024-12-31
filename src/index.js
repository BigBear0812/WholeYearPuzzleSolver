import { createLoader } from './loader.js';
import { solve } from './manager.js'; 


// Check that the right number of arguments are present in the command
if (process.argv.length < 4){
  console.log('Please specify month and day.');
  process.exit(1);
}

// Get the month and day from the argv values
const month = process.argv[2];
const day = parseInt(process.argv[3]);
const showTime = process.argv.indexOf('--time') > -1;
const showAll = process.argv.indexOf('--all') > -1;

// Create a loader and start it
let loader = createLoader();
loader.start();
// Track the start and end times if the --time flag is present
let startTime;
let totalTime;

// Track the start time
if(showTime)
  startTime = Date.now();

// Find all solutions
let solutions = await solve([{month, day, showAll}]);

// Track the end time
if(startTime)
  totalTime = Date.now() - startTime;

// Stop the loader from spinning
loader.stop();

// Print out the solutions
solutions.forEach(solution => console.log(solution.output));

// Print out the execution time if the --time flag is present
if(totalTime)
  console.log("Execution Time:", totalTime / 1000, "s");
