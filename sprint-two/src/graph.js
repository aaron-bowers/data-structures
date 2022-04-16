var storage;

// Instantiate a new graph
var Graph = function() {
  // create a variable that stores all the nodes
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add the node as a key and the value will be an empty array
  this.storage[node] = [];
};
// O(1) - Constant

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);

  // return node in this.storage;
};
// O(1) - Constant

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  while (this.storage[node].length) {
    var removed = this.storage[node].pop();
    this.removeEdge(node, removed);
  }

  delete this.storage[node];
};
// O(n) - Linear

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return a boolean
  return this.storage[fromNode].indexOf(toNode) > -1;
};
// O(n) - Linear

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};
// O(1) - Constant

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFromNode = this.storage[fromNode].indexOf(toNode);
  var indexToNode = this.storage[toNode].indexOf(fromNode);
  this.storage[fromNode].splice(indexFromNode, 1);
  this.storage[toNode].splice(indexToNode, 1);
};
// O(n) - Linear

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};
// O(n) - Linear

/*
 * Complexity: What is the time complexity of the above functions?
 */


