var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.front = 0;
  someInstance.back = 0;

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
    this.length--;
    var head = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return head;
  }
};

queueMethods.size = function() {
  return this.length;
};