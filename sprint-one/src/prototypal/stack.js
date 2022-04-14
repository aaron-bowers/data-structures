var storage, numericKey;

var Stack = function() {
  // Initializations
  storage = {};
  numericKey = 0;

  var instance = Object.create(stackMethods);

  return instance;
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


