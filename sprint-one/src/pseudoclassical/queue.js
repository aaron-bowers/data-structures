var storage, numericKey, sizeIndex;

var Queue = function() {
  this.storage = {};
  this.numericKey = 0;
  this.sizeIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
  this.sizeIndex++;
};

Queue.prototype.dequeue = function() {
  for (var key in this.storage) {
    var firstInQueue = this.storage[key];
    delete this.storage[key];
    break;
  }
  this.sizeIndex--;
  return firstInQueue;
};

Queue.prototype.size = function() {
  if (this.sizeIndex < 0) {
    return 0;
  } else {
    return this.sizeIndex;
  }
};