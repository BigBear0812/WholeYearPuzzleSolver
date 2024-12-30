import { spaces, pieces, blank, empty } from './data.js';
/**
 * A Weighted Graph
 */
export class Solver {
  constructor(month, day){
    this.nodes = new Map(spaces.filter(node => node[1].val != month && node[1].val != day));
    this.solutions = [];
    this.month = month;
    this.day = day;
  }


  findSolutions(showAll = false){
    this.#dfs(pieces, new Map(), showAll);
  }

  #dfs(pieces, visited, showAll = false){
    if(pieces.length == 0){
      this.solutions.push(visited);
      return;
    }
    if(!showAll && this.solutions.length > 0){
      return;
    }
    
    let current = pieces.shift();

    for(let variant of current.variants){
      let yStart = 0;
      for(let y = yStart; y <= 6; y++){
        let xStart = y === 6 ? 2 : 0;
        let xEnd = y === 6 ? 4 : y >= 2 && y <= 5 ? 6 : 5;
        for(let x = xStart; x <= xEnd; x++){
          let coordinates = variant.map(coord => `${coord.x + x},${coord.y + y}`);
          if(coordinates.every(coordinates => this.nodes.has(coordinates) && !visited.has(coordinates))){
            let newVisited = new Map(visited);
            let newPieces = new Array(...pieces);
            coordinates.forEach(coord => newVisited.set(coord, current.symbol));
            this.#dfs(newPieces, newVisited, showAll);
          }
        }
      }
    }
  }

  printSolutions(){
    for(let solution of this.solutions){
      this.#print(solution);
    }
    if(this.solutions.length == 0){
      console.log('No solutions found.');
    }
    else if(this.solutions.length > 1){
      console.log(`Total solutions: ${this.solutions.length}`);
    }
  }

  #print(solution, blockWidth = 3, blockHeight = 2){
    let blankPositions = new Map(spaces.filter(node => node[1].val == this.month || node[1].val == this.day).map(node => [node[0], node[1].name]));
    let output = '';
    for(let y = 0; y <= 6; y++){
      let spacer = y === 6 ? 2*blockWidth : 0;
      let line  = ' '.repeat(spacer);
      let xStart = y === 6 ? 2 : 0;
      let xEnd = y === 6 ? 4 : y >= 2 && y <= 5 ? 6 : 5;
      for(let x = xStart; x <= xEnd; x++){
        let key = `${x},${y}`;
        let char = blankPositions.has(key) 
          ? blockWidth === 3 
            ? blankPositions.get(key) 
            : blank.repeat(blockWidth) 
          : solution.has(key)
            ? solution.get(key).repeat(blockWidth) 
            : empty.repeat(blockWidth);
        line += char;
      }
      line += '\n';
      line = line.repeat(blockHeight);
      output += line;
    }
    console.log(output);
  }
}