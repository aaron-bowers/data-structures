let BinarySearchTree = function (value) {
  let tree = Object.create(bstMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

let bstMethods = {};

bstMethods.insert = function (value) {
  let child = BinarySearchTree(value);
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
// O(log n) - Logarithmic

bstMethods.contains = function (target) {
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
// O(log n) - Logarithmic

bstMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
// O(n) - Linear because we have to callback for every node.

/*
 * Complexity: What is the time complexity of the above functions?
 */
