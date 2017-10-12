var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed!

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (!found) {
      found = this.children[i].contains(target);
    }
  }
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(n)
 * contains: O(n)
 */
