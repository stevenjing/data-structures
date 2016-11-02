var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
      var head = storage[front];
      delete storage[front];
      front++;
      return head;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
