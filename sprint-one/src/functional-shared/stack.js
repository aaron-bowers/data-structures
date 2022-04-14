var storage, numericKey;


var Stack = function() {
  var someInstance = {};

  // Initializations
  storage = {};
  numericKey = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    storage[numericKey] = value;
    numericKey++;
  },
  pop: function() {
    delete storage[numericKey];
    numericKey--;
    return storage[numericKey];
  },
  size: function() {
    if (numericKey < 0) {
      return 0;
    } else {
      return numericKey;
    }
  }
};


