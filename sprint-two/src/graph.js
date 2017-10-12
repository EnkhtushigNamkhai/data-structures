

// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
};

var GraphNode = function(value) {
  //what if two nodes have the same value? maybe have some kind of ID for nodes?
  this.value = value;
  //this.visited = false;
  this.connectedNodes = [];
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //push a new node to the nodelist of Graph
  this.nodeList.push(new GraphNode(value));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //search in nodelist for value
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === value){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var nodeToRemove;
  for (var i = 0; i < this.nodeList.length; i++) {
    //find our node that we are going to remove
    if (this.nodeList[i].value === value){
      //get connectedList of this node that we are removing
      nodeToRemove = this.nodeList[i];
      //remove from the Graph's nodeList
      this.nodeList.splice(i, 1);
    }
  }

  //iterate over nodeToRemove's children and remove their reference to nodeToRemove
  for (var j = 0; j < nodeToRemove.connectedNodes.length; j++) {
    var child = nodeToRemove.connectedNodes[j];
    var index = child.connectedNodes.indexOf(nodeToRemove);
    child.connectedNodes.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeVal, toNodeVal) {
  //recursion time?
  var fromNode;
  var toNode;
  for (var i = 0; i < this.nodeList.length; i++){
    if (this.nodeList[i].value === fromNodeVal){
      fromNode = this.nodeList[i];
    } else {
      if (this.nodeList[i].value === toNodeVal) {
        toNode = this.nodeList[i];
      }
    }
  }
  if(fromNode.connectedNodes.includes(toNode) && toNode.connectedNodes.includes(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeVal, toNodeVal) {
  //find nodes, add each node to the other node's connectedNodes
  var fromNode;
  var toNode;

  for (var i = 0; i < this.nodeList.length; i++){
    if (this.nodeList[i].value === fromNodeVal){
      fromNode = this.nodeList[i];
    }
    if (this.nodeList[i].value === toNodeVal) {
      toNode = this.nodeList[i];
    }
  }
  //maybe throw an error if either value isn't in the graph?
  fromNode.connectedNodes.push(toNode);
  toNode.connectedNodes.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeVal, toNodeVal) {
  //find nodes, remove each node from the other node's connectedNodes
  var fromNode;
  var toNode;
  for (var i = 0; i < this.nodeList.length; i++){
    if (this.nodeList[i].value === fromNodeVal){
      fromNode = this.nodeList[i];
    } else {
      if (this.nodeList[i].value === toNodeVal) {
        toNode = this.nodeList[i];
      }
    }
  }
  //maybe throw an error if either value isn't in the graph?
  fromNode.connectedNodes.splice(fromNode.connectedNodes.indexOf(toNode), 1);
  toNode.connectedNodes.splice(toNode.connectedNodes.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over the nodeList and run the cb on it
  for (var i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i].value);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(n)
 * contains: O(n)
 * removeNode: O(n + m*k) where m = the removed node's edges and k is the connected nodes edges
 * addEdge: O()
 * hasEdge: O()
 * removeEdge: O()
 * forEachNode: O()
 */


