var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed!
  newTree.parent = null;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childNode = Tree(value);
  childNode.parent = this;
  this.children.push(childNode);
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

treeMethods.removeFromParent = function() {
  //want to remove this from Parent node
  //parent node = this.parent
  //if it doesn't have a parent
  if (this.parent === null) {
    return;
  }

  function recursivelyRemoveChildren(node) {
    for (var i = 0; i < node.children.length; i++) {
      recursivelyRemoveChildren(node.children[i]);
      node.children.splice(i, 1);
    }
    return;
  }

  recursivelyRemoveChildren(this);


  //remove ourself from our parent
  var currNode = this.parent;
  for (var i = 0; i < currNode.children.length; i++) {
    if (currNode.children[i] === this) {
      currNode.children.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(n)
 * contains: O(n)
 */
