var storage, numericKey, sizeIndex;

var Queue = function() {
  // Initializations
  storage = {};
  numericKey = 0;
  sizeIndex = 0;

  var instance = Object.create(queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    storage[numericKey] = value;
    numericKey++;
    sizeIndex++;
  },

  dequeue: function() {
    for (var key in storage) {
      var firstInQueue = storage[key];
      delete storage[key];
      break;
    }
    sizeIndex--;
    return firstInQueue;
  },

  size: function() {
    if (sizeIndex < 0) {
      return 0;
    } else {
      return sizeIndex;
    }
  }
};