var count = 0;
var storagePercentage;


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [k, v];
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i]) {
        if (this._storage[index][i][0] === k) {
          this._storage[index][i][1] = v;
          return;
        }
      }
    }
    this._storage[index].push(tuple);
    count++;
  } else {
    this._storage[index] = bucket;
    this._storage[index].push(tuple);
    count++;
    // console.log(count);
  }

  if (this.count > this._limit * 0.75) {
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
  }
  console.log(this.count);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index].length === 1) {
    if (this._storage[index][0]) {
      if (this._storage[index][0][0] === k) {
        return this._storage[index][0][1];
      }
    }
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i]) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i]) {
      if (this._storage[index][i][0] === k) {
        // this._storage[index][i].pop();
        // this._storage[index][i].pop();
        // this._storage[index][i] = undefined;
        delete this._storage[index][i];
        count--;
        // console.log(count);
      }
    }
  }
};

// console.log(count);



/*
 * Complexity: What is the time complexity of the above functions?
 */


