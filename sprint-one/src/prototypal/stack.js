var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(stackMethods);
  obj.length = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  	this[this.length] = value;
  	this.length ++;
  }; 

stackMethods.pop = function(){
  if(this.length >= 1){
    this.length --;
  	return this[this.length];
  }
};

stackMethods.size = function(){
	return this.length;
};