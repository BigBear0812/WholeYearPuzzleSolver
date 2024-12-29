import { nodes, pieces } from './data.js';
/**
 * A Weighted Graph
 */
export class Graph {
  constructor(month, day){
    this.edges = new Map(nodes.filter(node => node[1].val != month && node[1].val != day));
    this.solutions = [];
    this.month = month;
    this.day = day;
  }

  /**
   * Add a node to the graph
   * @param {{y: number, x: number} node 
   */
  addNode(node){
    let key = this.#key(node.x, node.y);
    this.edges[key] = [];
  }

  /**
   * Determine if a given node is currently in the grid
   * @param {{y: number, x: number} node 
   * @returns {boolean} True if the node is already in the graph
   */
  hasNode(node){
    let key = this.#key(node.x, node.y);
    return this.edges[key] ? true : false;
  }

  /**
   * Add an edge to the graph
   * @param {{y: number, x: number}} from Start node for the edge
   * @param {{y: number, x: number}} to End node for the edge
   * @param {number} weight Edge weight
   * @param {boolean} reverse Reverse directions when adding opposite edge
   */
  addEdge(from, to, weight){
    // Get the from and to nodes
    let fromNode = this.#key(from.x, from.y);
    let toNode = this.#key(to.x, to.y);
    
    // Add the initial node
    this.edges[fromNode].push({node: toNode, weight: weight});
    // Add the opposite nodes
    this.edges[toNode].push({node: fromNode, weight: weight});
    
  }

  /**
   * Used to convert node data into unique strings for identifying each node
   * @param {number} x 
   * @param {number} y
   * @returns 
   */
  #key(x, y){
    return `${x},${y}`;
  }

  findSolutions(){
    this.#dfs(pieces, new Map());
  }

  #dfs(pieces, visited){
    if(pieces.length == 0){
      this.solutions.push(visited);
      return;
    }
    if(this.solutions.length > 0){
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
          if(coordinates.every(coordinates => this.edges.has(coordinates) && !visited.has(coordinates))){
            let newVisited = new Map(visited);
            let newPieces = new Array(...pieces);
            coordinates.forEach(coord => newVisited.set(coord, current.symbol));
            this.#dfs(newPieces, newVisited);
          }
        }
      }
    }
  }

  printSolutions(){
    for(let solution of this.solutions){
      this.#print(solution);
    }
  }

  #print(solution){
    let blankPositions = new Set(nodes.filter(node => node[1].val == this.month || node[1].val == this.day).map(node => node[0]));
    let output = '';
    for(let y = 0; y <= 6; y++){
      let xStart = y === 6 ? 2 : 0;
      let xEnd = y === 6 ? 4 : y >= 2 && y <= 5 ? 6 : 5;
      output += ' '.repeat(xStart);
      for(let x = xStart; x <= xEnd; x++){
        let key = `${x},${y}`;
        output += blankPositions.has(key) ? 'X' : solution.has(key) ? solution.get(key) : '.';
      }
      output += '\n';
    }
    console.log(output);
  }
}