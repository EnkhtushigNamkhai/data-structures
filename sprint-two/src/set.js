var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fixed!
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var newArray = new Array(this._storage.length - 1);
  var index = 0;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {

    } else {
      newArray[index] = item;
      index++;
    }
  }
  this._storage = newArray;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(n)
 * contains: O(n)
 * remove: O(n)
 *
 */
