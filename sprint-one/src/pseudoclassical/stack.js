var storage, numericKey;

var Stack = function() {
  // Initializations
  this.storage = {};
  this.numericKey = 0;

  this;
};

Stack.prototype.push = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};

Stack.prototype.pop = function() {
  delete this.storage[this.numericKey];
  this.numericKey--;
  return this.storage[this.numericKey];
};

Stack.prototype.size = function() {
  if (this.numericKey < 0) {
    return 0;
  } else {
    return this.numericKey;
  }
};