var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

  list.addToTail = function(value) {
    var node = Node(value);

  if (list.counter === 0){
    list.head = node;
    list.tail = node;
  } else {
    var temp = list.tail;
    temp.next = node;
    list.tail = node;
  }

  list.counter++;

  };

  list.removeHead = function() {

    var formerHeadVal = list.head.value;
    list.head = list.head.next; 
    return formerHeadVal;
  };

  list.contains = function(target) {

    // while next property is not == to null check the value
    // return true if value is found

    var current = list.head;

    do {
      if (current.value === target) {
        return true;
      }
      //  move to the next node
      current = current.next;
    } while (current !== null);

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
 * The worst case time complexity of contains function is O(n)
 */
