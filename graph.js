
/**
 * A Weighted Graph
 */
class Graph {
  constructor(){
    this.edges = {};
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
}