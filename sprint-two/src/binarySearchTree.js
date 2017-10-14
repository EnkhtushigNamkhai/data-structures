var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;

  return binaryTree;
};

BinarySearchTree.prototype.insert = function (value) {
  //side effect: inserts as a child of a node found on our tree at the appropriate loc
  //our root is this
  var currNode = this;
  //start with our root node
  //compare root node's value against passed in value

  //if our passed in value is greater, check right node
  //if right node is null, create new BST with value and set parent's child reference
  //if right node is not null, call insert on the right child
  if (currNode.value < value) {
    if (currNode.right === null) {
      currNode.right = BinarySearchTree(value);
    } else {
      currNode.right.insert(value);
    }
  }
  //if our passed in value is smaller, check left node
  //if left node null create new BST and set parent's child
  //if left node not null, call insert on left child
  if (currNode.value > value) {
    if (currNode.left === null) {
      currNode.left = BinarySearchTree(value);
    } else {
      currNode.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  //returns boolean
  //Currrent node is this
  var currNode = this;
  //have a variable found
  var found = false;
  //while we haven't found the Node with the value,
  while (currNode !== null) {
    //if the value is greater than our current node's value, go right
    if (value > currNode.value) {
      currNode = currNode.right;
    } else if (value < currNode.value) {
      //if the value is less than our current node's value, go left
      currNode = currNode.left;
    } else if (value === currNode.value) {
      //if the values are equal, found = true;
      found = true;
      break;
    }
  }
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  //side effect: executes cb on each node
  //callback on this value
  cb(this.value);
  //if the left is not null
  if (this.left !== null) {
    //recurse on left
    this.left.depthFirstLog(cb);
  }
  //if right is not null
  if (this.right !== null) {
    //recurse on right
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n) if it's balanced, O(n) if it's super imbalanced
 * depthFirstLog: O(n)
 *
 */
