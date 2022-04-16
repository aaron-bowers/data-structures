var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var child = BinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = child;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = child;
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.value > target) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(target);
    }
  }
  if (this.value < target) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
