var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};
// O(1) - Constant

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) > -1;
};
// O(n) - Linear

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var index = this._storage.indexOf(item);
    this._storage.splice(index, 1);
  }
};
// O(n) - Linear

/*
 * Complexity: What is the time complexity of the above functions?
 */
