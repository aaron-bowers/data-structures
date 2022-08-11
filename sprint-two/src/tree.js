let Tree = function (value) {
  let newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

let treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};
// O(1) - Constant

treeMethods.contains = function (target) {
  // base case
  // if we find target
  if (this.value === target) {
    // return true
    return true;
  }
  // if we don't find it AND there are no children
  if (this.children.length === 0) {
    // return false
    return false;
  }

  // recursion
  // not the target and has children
  // iterate over each child
  for (let i = 0; i < this.children.length; i++) {
    // recursively call function on each child
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  // return false
  return false;
};
// O(n) - Linear

/*
 * Complexity: What is the time complexity of the above functions?
 */
