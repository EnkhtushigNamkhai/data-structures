var Queue = function() {
  var someInstance = {};
  var startOfQueue = 0;
  var endOfQueue = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endOfQueue] = value;
    endOfQueue++;
  };

  someInstance.dequeue = function() {
    if(Object.keys(storage).length === 0){
      return undefined;
    }

    var toDequeue = storage[startOfQueue];
    delete storage[startOfQueue];
    startOfQueue++;
    return toDequeue;
  };

  someInstance.size = function() {
    return endOfQueue - startOfQueue;
  };

  return someInstance;
};
