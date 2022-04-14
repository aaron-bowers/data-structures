var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // create index tracking variable
  var numericKey = 0;
  var sizeIndex = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[numericKey] = value;
    numericKey++;
    sizeIndex++;
  };

  someInstance.dequeue = function() {
    for (var key in storage) {
      var firstInQueue = storage[key];
      delete storage[key];
      break;
    }
    sizeIndex--;
    return firstInQueue;
  };

  someInstance.size = function() {
    if (sizeIndex < 0) {
      return 0;
    } else {
      return sizeIndex;
    }
  };

  return someInstance;
};
