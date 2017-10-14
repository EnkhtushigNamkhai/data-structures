var hashOne = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTwo = function(str, max) {
  var hash = 0;
  var i, chr;
  if (str.length === 0) {
    return hash;
  }
  for (i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashThree = function(str, max) {
  return hashOne + hashTwo;
};

var falsePositives = function(arr) {
  debugger;
  var filter = new BloomFilter();
  var falsePositivesCount = 0;
  for (var i = 0; i < arr.length; i++) {
    filter.insert(arr[i]);
  }
  for (var j = 0; j < 10000; j++) {
    if (filter.contains(j.toString())) {
      falsePositivesCount++;
    }
  }
  return falsePositivesCount;
};