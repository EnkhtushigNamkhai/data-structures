var HashTable = function(limit) {
  if (limit === undefined) {
    this._limit = 8;
  } else {
    this._limit = limit;
  }
  this._storage = LimitedArray(this._limit);
  this._numTuples = 0;
};


HashTable.prototype.insert = function(k, v) {
  //not found case
  var notFoundCaseCB = (function(hashBucket, tuple) {
    tuple = [k, v];
    hashBucket.push(tuple);
    this._numTuples++;
    if (this._numTuples / this._limit > 0.75) {
      this.resizeTable(this._limit, this._limit * 2);
    }
  }).bind(this);
  //found case
  var foundCaseCB = (function(hashBucket, tuple) {
    // var hashBucket = this._storage.get(index);
    // var tuple = hashBucket.find(function(item) {return item[0] === k });
    tuple[1] = v;
  }).bind(this);

  this._findTuple(k, foundCaseCB, notFoundCaseCB);
};

HashTable.prototype.retrieve = function(k) {
  //found case
  var foundCaseCB = (function(hashBucket, tuple) {
    return tuple[1];
  }).bind(this);
  return this._findTuple(k, foundCaseCB);
};

HashTable.prototype.remove = function(k) {
  //found case
  var foundCaseCB = (function(hashBucket, tuple) {
    hashBucket.splice(hashBucket.indexOf(tuple), 1);
    this._numTuples--;
    if (this._numTuples / this._limit < .25) {
      this.resizeTable(this._limit, this._limit / 2);
    }
    return tuple[1];
  }).bind(this);

  return this._findTuple(k, foundCaseCB);
};

HashTable.prototype.resizeTable = function(oldSize, newSize) {
  //create a new HashTable with size newSize
  var newHashTable = new HashTable(newSize);
  this._storage.each(function(element, index, collection) {
    if (element !== undefined) {
      for (var i = 0; i < element.length; i++) {
        var tuple = element[i];
        newHashTable.insert(tuple[0], tuple[1]);
      }
    }
  });
  this._limit = newHashTable._limit;
  this._storage = newHashTable._storage;
  this._numTuples = newHashTable._numTuples;
};

HashTable.prototype._findTuple = function(k, foundCaseCB, notFoundCaseCB) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashBucket = this._storage.get(index) || [];
  this._storage.set(index, hashBucket);

  var tuple = hashBucket.find(function(item) { return item[0] === k; });
  //then the key is not in hashtable
  if (tuple === undefined) {
    if (notFoundCaseCB === undefined) {
      return undefined;
    } else {
      return notFoundCaseCB(hashBucket, tuple);
    }
    // return undefined;
  }
  return foundCaseCB(hashBucket, tuple);
};




/*
 * Complexity: What is the time complexity of the above functions?
 * insert: amortized O(1)
 * retrieve: amortized O(1)
 * remove: amortized O(1)
 * resizeTable: amortized O(n)
 */
