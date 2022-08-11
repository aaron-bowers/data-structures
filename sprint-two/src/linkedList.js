let LinkedList = function () {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    // declare variable and assign the return of the Node constructor
    let newNode = Node(value);
    // if there is a tail
    if (this.tail) {
      // add the instance to tail
      this.tail.next = newNode;
      this.tail = newNode;
      // if there is no tail
    } else {
      // reassign tail to be node value
      this.tail = newNode;
      this.head = this.tail;
    }
  };
  // O(1) - Constant

  list.removeHead = function () {
    // remove the head
    let head = this.head;
    // point head to next node
    this.head = this.head.next;
    // return the value of head variable
    return head.value;
  };
  // O(1) - Constant

  list.contains = function (target) {
    // declare a variable named current
    let current = this.head;
    // iterate over the list starting from the head
    while (current !== null) {
      // if the current value is equal to the target
      if (current.value === target) {
        // return true
        return true;
      } else {
        // if not, move to the next node
        current = current.next;
      }
    }
    // return false if list does not contain the target input
    return false;
  };

  return list;
};
// O(n) - Linear

let Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
