var Queue = function() {
  var someInstance = {};
  var size = 0; 
  var first = 0;
  var last = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
     size ++;
     last ++;
  };

  someInstance.dequeue = function() {
    if (size >= 1){
      size --;
      first ++;
      return storage[first - 1];
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
