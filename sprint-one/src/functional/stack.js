var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var numericKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numericKey] = value;
    numericKey++;
  };

  someInstance.pop = function() {
    delete storage[numericKey];
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
