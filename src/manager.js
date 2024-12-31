import { Worker } from 'worker_threads';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Resolve the path to the module directory an the worker module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerPath = path.resolve(__dirname, './worker.js');

// Set the number maximum of worker threads
const WORKER_THREADS = 15;

/**
 * Find solutions for the specified days
 * @param {{day: number, month: string, showAll: boolean}} days The days to find results for
 * @returns The solution outputs for each day
 */
export const solve = async (days) => {
  // Record all of the solutions
  let solutions = [];
  // Get the number of days that will be processed by each worker thread
  let workerDataLength = Math.ceil(days.length / WORKER_THREADS);
  // Get the number of necessary workers
  let workerCount = Math.ceil(days.length / workerDataLength);
  // Store the data that will be passed to each worker thread
  let workerData = [];
  // Split the days into worker data arrays
  for(let i = 0; i < workerCount; i++){
    workerData.push(days.slice(i * workerDataLength, (i + 1) * workerDataLength));
  }
  // Create a promise for each worker thread
  let workerPromises = workerData.map(data => {
    return new Promise((resolve, reject) => {
      // Create a new worker and pass in the specific set of data to process
      const worker = new Worker(workerPath, { workerData: data });
      // When solutions are returned add them to the overall array of solutions
      worker.on('message', message => {
        solutions.push(...message);
        resolve();
      });
      // Handle errors and exiting from the worker thread gracefully
      worker.on('error', reject);
      worker.on('exit', code => {
        if(code !== 0){
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
        resolve();
      });
    });
  });

  // Await all of the promises with their worker threads to complete.
  // Log out any errors that occur when running the worker threads.
  await Promise.all(workerPromises).catch((error) => {console.log(error)});
  return solutions;
};
