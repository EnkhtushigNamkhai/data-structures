var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var topOfStack = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[topOfStack] = value;
    topOfStack++;
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length === 0) {
      return undefined;
    }
    topOfStack--;
    var popped = storage[topOfStack];
    delete storage[topOfStack];
    return popped;
  };

  someInstance.size = function() {
    return topOfStack;
  };

  return someInstance;
};
