var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if head and tail are null, create a new node
    if (list.head === null || list.tail === null) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    // start at our tail
    } else {
      // create a new node - with the value
      var newNode = Node(value);
      // add it to our current tail
      list.tail.next = newNode;
      // set tail to new node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //if both head and tail pointer are null, return undefined
    if (list.head === null || list.tail === null) {
      return undefined;
    }
    //save the value of the current head
    var returnVal = list.head.value;
    //if the next node is undefined, set head and tail to null.
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      //else set the head to the next node
      list.head = list.head.next;
    }
    return returnVal;
  };

  list.contains = function(target) {
    // start at head
    // assign new reference to head
    var currNode = list.head;
    var found = false;
    // start of loop
    while (currNode !== null) {
      // check if new reference contains target
      if (currNode.value === target) {
        found = true;
        break;
      }
      // advance our new reference by calling reference.next
      currNode = currNode.next;
    // end of loop
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
