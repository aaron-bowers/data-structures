var storage, numericKey, sizeIndex;

var Queue = function() {
  // Initialization
  storage = {};
  numericKey = 0;
  sizeIndex = 0;

  this;
};

Queue.prototype.enqueue = function(value) {
  storage[numericKey] = value;
  numericKey++;
  sizeIndex++;
};

Queue.prototype.dequeue = function() {
  for (var key in storage) {
    var firstInQueue = storage[key];
    delete storage[key];
    break;
  }
  sizeIndex--;
  return firstInQueue;
};

Queue.prototype.size = function() {
  if (sizeIndex < 0) {
    return 0;
  } else {
    return sizeIndex;
  }
};