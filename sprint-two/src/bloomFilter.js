BloomFilter = function() {
  this.storage = 0;
  this.size = 18;
};
BloomFilter.prototype.insert = function(value) {
  var hash1 = hashOne(value, this.size);
  var hash2 = hashTwo(value, this.size);
  var hash3 = hashThree(value, this.size);
  this.storage = this.storage | 1 << hash1 | 1 << hash2 | 1 << hash3;
};
//maybe???
BloomFilter.prototype.contains = function(value) {
  var hash1 = hashOne(value, this.size);
  var hash2 = hashTwo(value, this.size);
  var hash3 = hashThree(value, this.size);
  var toCheck = 1 << hash1 | 1 << hash2 | 1 << hash3;
  if ((this.storage & toCheck) === toCheck) {
    return true;
  }
  return false;
};