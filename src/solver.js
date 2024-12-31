import { spaces, pieces, blank, empty } from './data.js';
/**
 * A Whole, Year Puzzle Solver
 */
export class Solver {
  /**
   * Construct a new Solver
   * @param {string} month Month of the puzzle date
   * @param {number} day Day of the puzzle date
   */
  constructor(month, day){
    // Include the valid puzzle nodes without the cone for the currently selected date
    this.nodes = new Map(spaces.filter(node => node[1].val != month && node[1].val != day));
    // Keep track of all solutions found
    this.solutions = [];
    // Store the month and day for the puzzle
    this.month = month;
    this.day = day;
  }

  /**
   * Find all of the solutions for the given day's puzzle
   * @param {boolean} showAll True if solving for all puzzle solutions for the data not just the first solution
   */
  async findSolutions(showAll = false){
    // Use depth first search to find the puzzle solutions
    this.#dfs(pieces, new Map(), showAll);
  }

  /**
   * Use depth first search to find the puzzle solutions
   * @param {Object[]``} pieces The puzzle piece data
   * @param {Map} visited A Map of visited locations and their symbols
   * @param {boolean} showAll True to find all solutions, false to stop after the first solution
   * @returns 
   */
  #dfs(pieces, visited, showAll = false){
    // If there are no pieces left to place this is a solution. Add it to the solutions array and return
    if(pieces.length == 0){
      this.solutions.push(visited);
      return;
    }
    // Otherwise if this is not finding all solutions and a solution has been found return
    if(!showAll && this.solutions.length > 0){
      return;
    }
    // Gte the next piece to place
    let current = pieces.shift();

    // Try to place each variant of the current piece
    for(let variant of current.variants){
      // Place it at every valid position
      for(let y = 0; y <= 6; y++){
        // Find the x start and end values for the grid spaces on this row
        let xStart = y === 6 ? 2 : 0;
        let xEnd = y === 6 ? 4 : y >= 2 && y <= 5 ? 6 : 5;
        for(let x = xStart; x <= xEnd; x++){
          // Get the coordinate for the piece's placement in this position on the grid
          let coordinates = variant.map(coord => `${coord.x + x},${coord.y + y}`);
          // Make sure all coordinate are valid and not already visited`
          if(coordinates.every(coordinates => this.nodes.has(coordinates) && !visited.has(coordinates))){
            // Create a new visited map and pieces array
            let newVisited = new Map(visited);
            let newPieces = new Array(...pieces);
            // Add the coordinates to the visited map
            coordinates.forEach(coord => newVisited.set(coord, current.symbol));
            // Recursively call dfs with the new pieces and visited map
            this.#dfs(newPieces, newVisited, showAll);
          }
        }
      }
    }
  }

  /**
   * Print out all of the solutions to the console
   */
  printSolutions(){
    for(let solution of this.solutions){
      let output = this.#createOutput(solution);
      console.log(output);
    }
    if(this.solutions.length == 0){
      console.log('No solutions found.');
    }
    else if(this.solutions.length > 1){
      console.log(`Total solutions: ${this.solutions.length}`);
    }
  }

  /**
   * Create all of the solutions output
   * @returns {string} The output for all of the solutions
   */
  createSolutionOutput(){
    let output = '';
    for(let solution of this.solutions){
      output += this.#createOutput(solution);
    }
    if(this.solutions.length == 0){
      output += 'No solutions found.';
    }
    else if(this.solutions.length > 1){
      output += `Total solutions: ${this.solutions.length}`;
    }
    return output;
  }

  /**
   * Create the console output string for the solution
   * @param {Map} solution A single solution Map of visited locations and their symbols
   * @param {number} blockWidth The width to display each block
   * @param {number} blockHeight The height to display each block
   * @returns {string} The output for the solution
   */
  #createOutput(solution, blockWidth = 3, blockHeight = 2){
    // Get the output values for the blank positions in this solution
    let blankPositions = new Map(spaces.filter(node => node[1].val == this.month || node[1].val == this.day).map(node => [node[0], node[1].name]));
    // Create the output string for the solution
    let output = `Date: ${this.month} ${this.day}\n\n`;
    // Create the output string row by row and space by space
    for(let y = 0; y <= 6; y++){
      // Create a spacer for the final row
      let spacer = y === 6 ? 2*blockWidth : 0;
      // Record the output for this line
      let line  = ' '.repeat(spacer);
      // Adjust the start and end values for x on this line
      let xStart = y === 6 ? 2 : 0;
      let xEnd = y === 6 ? 4 : y >= 2 && y <= 5 ? 6 : 5;
      // Create the output for each space on this line
      for(let x = xStart; x <= xEnd; x++){
        // Gte the space's key
        let key = `${x},${y}`;
        // Determine the output character for this block.
        // Check first for this being a blank position and if not check 
        // for the symbol in the solution map. Then add it to the line.
        let char = blankPositions.has(key) 
          ? blockWidth === 3 
            ? blankPositions.get(key) 
            : blank.repeat(blockWidth) 
          : solution.has(key)
            ? solution.get(key).repeat(blockWidth) 
            : empty.repeat(blockWidth);
        line += char;
      }
      // Add a new line and repeat this line for the block height
      line += '\n';
      line = line.repeat(blockHeight);
      // Add this line to the output
      output += line;
    }
    return output;
  }
}