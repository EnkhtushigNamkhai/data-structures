var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.topOfStack = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.topOfStack] = value;
    this.topOfStack++;
  },
  pop: function() {
    if (Object.keys(this.storage).length === 0) {
      return undefined;
    }
    this.topOfStack--;
    var popped = this.storage[this.topOfStack];
    delete this.storage[this.topOfStack];
    return popped;
  },
  size: function() {
    return this.topOfStack;
  }};


var myStack = Stack();

myStack.push('hello');

var mySecondStack = Stack();

mySecondStack.push('hello');


