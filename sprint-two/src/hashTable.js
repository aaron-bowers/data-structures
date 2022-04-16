
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log(this._storage);
  this._count = 0;
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
    this._count++;
  } else {
    this._storage[index] = bucket;
    this._storage[index].push(tuple);
    this._count++;
  }
  // if (this._count > this._limit * 0.75) {
  //   this._limit = this._limit * 2;
  //   this.resize(this._limit);
  // }
  console.log('insert:', this._count);
  console.log(this._storage);
};
// O(1) - Constant if we can resize and keep bucket sizes relatively small. Without resizing, O(n).

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
  console.log('retrieve:', this._count);
  console.log(this._storage);
};
// O(1) - Constant if we can resize and keep bucket sizes relatively small. Without resizing, O(n).

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i]) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(i, 1);
        this._count--;
      }
    }
  }
  // if (this._count < this._limit * 0.25) {
  //   this._limit = this._limit / 2;
  //   this.resize(this._limit);
  // }
  console.log('remove:', this._count);
  console.log(this._storage);
};
// O(1) - Constant if we can resize and keep bucket sizes relatively small. Without resizing, O(n).

// HashTable.prototype.resize = function(limit) {
//   // update the count and limit
//   this._count = 0;
//   this._limit = limit;
//   // new variable to store this storage
//   var oldStorage = this._storage;
//   // reassign this storage to an empty array
//   this._storage = LimitedArray(limit);
//   // transfer data from new array with 'old' storage and redistribute into this storage
//   oldStorage.each(function(bucket, i, storage) {
//     for (var i = 0; i < bucket.length; i++) {
//       this.insert(bucket[i][0], bucket[i][1]);
//     }
//   }.bind(this));
// };

// O(n) - Linear because we have to look at each bucket.


/*
 * Complexity: What is the time complexity of the above functions?
 */


