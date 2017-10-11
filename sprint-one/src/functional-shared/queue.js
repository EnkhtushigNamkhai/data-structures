var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.startOfQueue = 0;
  someInstance.endOfQueue = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.endOfQueue] = value;
    this.endOfQueue++;
  },
  dequeue: function() {
    if (Object.keys(this.storage).length === 0) {
      return undefined;
    }
    var toDequeue = this.storage[this.startOfQueue];
    delete this.storage[this.startOfQueue];
    this.startOfQueue++;
    return toDequeue;
  },
  size: function() {
    return this.endOfQueue - this.startOfQueue;
  }
};


