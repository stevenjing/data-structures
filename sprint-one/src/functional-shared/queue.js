var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.front = 0;
  someInstance.back = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  this.length++;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    var head = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.length--;
    return head;
  }
};

queueMethods.size = function() {
  return this.length;
};