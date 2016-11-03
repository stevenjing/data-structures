

// Instantiate a new graph
var Graph = function() {
};



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var link in this[node]){
    this.removeEdge(node, Number(link));
  }

  delete this[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return toNode in this[fromNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this[fromNode][toNode] = toNode;
  this[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  delete this[fromNode][toNode];
  delete this[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for ( var key in this) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addnode is constant
  contains is constant time
  remove node is O(n)
  hasEdge is constant
  addEdge is constant
  removeEdge is constant
  forEachNode is O(n) 
 */


