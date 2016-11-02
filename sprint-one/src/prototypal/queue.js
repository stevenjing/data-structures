var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);

  obj.first = 0;
  obj.last = 0;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  	this[this.last] = value;
  	this.last ++;
  }; 

queueMethods.dequeue = function(){
  	if(this.last - this.first >= 1){
  	  this.first ++;
  	  return this[this.first - 1];
  	}
  };

queueMethods.size = function(){
  	return this.last - this.first;
  };

