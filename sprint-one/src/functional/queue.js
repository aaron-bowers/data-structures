var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // create index tracking variable
  var numericKey = 0;
  var queueIndex = [];

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[numericKey] = value;
    queueIndex.push('"' + numericKey + '"');
    numericKey++;
  };

  someInstance.dequeue = function() {
    delete storage[queueIndex[0]];
    queueIndex = queueIndex.slice(1);
    numericKey--;
    return storage[numericKey];
  };

  someInstance.size = function() {
    if (numericKey < 0) {
      return 0;
    } else {
      return numericKey;
    }
  };

  return someInstance;
};
