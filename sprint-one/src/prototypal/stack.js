var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.topOfStack = 0;
  return obj;
};

stackMethods = {
  push: function(value) {
    this.storage[this.topOfStack] = value;
    this.topOfStack++;
  },
  pop: function() {
    if (Object.keys(this.storage).length === 0) {
      return undefined;
    }
    this.topOfStack--;
    var toPop = this.storage[this.topOfStack];
    delete this.storage[this.topOfStack];
    return toPop;
  },
  size: function() {
    return this.topOfStack;
  }
};


