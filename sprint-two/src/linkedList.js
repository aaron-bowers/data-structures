var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // declare variable and assign the return of the Node constructor
    var newNode = Node(value);
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

  list.removeHead = function() {
    // remove the head
    var head = this.head;
    // point head to next node
    this.head = this.head.next;
    // return the value of head variable
    return head.value;
  };

  list.contains = function(target) {
    // declare a variable named current
    var current = this.head;
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
    // return boolean if list contains the target input
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
