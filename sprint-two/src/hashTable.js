var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  };

  HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(index) === undefined) {
      var bucket = [];
      this._storage.set(index, bucket);
    }
    var keyVal = [k, v];
    if (this.retrieve(k) === undefined) {
      this._storage.get(index).push(keyVal);
    }
    else {
      var hashBucket = this._storage.get(index);
      var keyVal = hashBucket.find(function(item) {return item[0] === k });
      keyVal[1] = v;
    }
  };

  HashTable.prototype.retrieve = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(index) === undefined) {
      return undefined;
    }
    var hashBucket = this._storage.get(index);
    var keyVal = hashBucket.find(function(item) {return item[0] === k });
    if (keyVal === undefined) {
      return undefined;
    }
    return keyVal[1];
  };

  HashTable.prototype.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(index) === undefined) {
      return undefined;
    }
    var hashBucket = this._storage.get(index);
    //indexOf for the key/val pair associated with our key
    //delete that index from our hashBucket
    var keyVal = hashBucket.find(function(item) {return item[0] === k });

    if (keyVal === undefined) {
      return undefined;
    }
    hashBucket.splice(hashBucket.indexOf(keyVal), 1);
    return keyVal[1];
  };



  /*
   * Complexity: What is the time complexity of the above functions?
   */
