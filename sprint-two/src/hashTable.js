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
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    this._storage.set(index, bucket);
  }
  var tuple = [k, v];
  if (this.retrieve(k) === undefined) {
    this._storage.get(index).push(tuple);
  }
  else {
    var hashBucket = this._storage.get(index);
    var tuple = hashBucket.find(function(item) {return item[0] === k });
    tuple[1] = v;
  }
  this._numTuples++;
  if (this._numTuples / this._limit > 0.75) {
    this.resizeTable(this._limit, this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  var hashBucket = this._storage.get(index);
  var tuple = hashBucket.find(function(item) {return item[0] === k });
  if (tuple === undefined) {
    return undefined;
  }
  return tuple[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  var hashBucket = this._storage.get(index);
  //indexOf for the key/val pair associated with our key
  //delete that index from our hashBucket
  var tuple = hashBucket.find(function(item) {return item[0] === k });

  if (tuple === undefined) {
    return undefined;
  }
  hashBucket.splice(hashBucket.indexOf(tuple), 1);
  this._numTuples--;
  if (this._numTuples / this._limit < .25) {
    this.resizeTable(this._limit, this._limit / 2);
  }
  return tuple[1];
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



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: amortized O(1)
 * retrieve: amortized O(1)
 * remove: amortized O(1)
 * resizeTable: amortized O(n)
 */
