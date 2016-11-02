var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.length = 0;
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(value) {

  this[this.back] = value;
  this.back ++;
  this.length ++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length --;
    var head = this[this.front];
    delete this[this.front];
    this.front ++;
    return head;
  }
};

Queue.prototype.size = function () {
  return this.length;
};
