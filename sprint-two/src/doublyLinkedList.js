var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    // if head and tail are null, create a new node
    if (list.head === null || list.tail === null) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    // start at our tail
    } else {
      // create a new node - with the value
      var newNode = Node(value);
      // add it to our current head
      list.head.prev = newNode;
      // set new node's next to head
      newNode.next = list.head;
      // set head to our new node
      list.head = newNode;

    }
  };

  list.removeTail = function() {
    //if both head and tail pointer are null, return undefined
    if (list.head === null || list.tail === null) {
      return undefined;
    }
    //save the value of the current tail
    var returnVal = list.tail.value;
    //if the prev node is undefined, set head and tail to null.
    if (list.tail.prev === null) {
      list.head = null;
      list.tail = null;
    } else {
      //else set the tail to the prev node
      list.tail = list.tail.prev;
      list.tail.next = null;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToHead: O(1)
 * removeTail: O(1)
 * contains: O(n)
 */
