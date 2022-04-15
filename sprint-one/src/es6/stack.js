var storage, numericKey;

class Stack {

  constructor() {
    this.storage = {};
    this.numericKey = 0;
  }

  push(value) {
    this.storage[this.numericKey] = value;
    this.numericKey++;
  }

  pop() {
    delete this.storage[this.numericKey];
    this.numericKey--;
    return this.storage[this.numericKey];
  }

  size() {
    if (this.numericKey < 0) {
      return 0;
    } else {
      return this.numericKey;
    }
  }
}