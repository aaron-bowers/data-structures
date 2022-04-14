var storage, numericKey;

var Stack = function() {
  // Initializations
  storage = {};
  numericKey = 0;

  this;
};

Stack.prototype.push = function(value) {
  storage[numericKey] = value;
  numericKey++;
};

Stack.prototype.pop = function() {
  delete storage[numericKey];
  numericKey--;
  return storage[numericKey];
};

Stack.prototype.size = function() {
  if (numericKey < 0) {
    return 0;
  } else {
    return numericKey;
  }
};