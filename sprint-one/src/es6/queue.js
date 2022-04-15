var storage, numericKey, sizeIndex;

class Queue {
  constructor() {
    this.storage = {};
    this.numericKey = 0;
    this.sizeIndex = 0;
  }

  enqueue (value) {
    this.storage[this.numericKey] = value;
    this.numericKey++;
    this.sizeIndex++;
  }

  dequeue () {
    for (var key in this.storage) {
      var firstInQueue = this.storage[key];
      delete this.storage[key];
      break;
    }
    this.sizeIndex--;
    return firstInQueue;
  }

  size () {
    if (this.sizeIndex < 0) {
      return 0;
    } else {
      return this.sizeIndex;
    }
  }
}
