var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.length = 0;

  extend(obj, stackMethods);
  return obj;
};

var extend = function(to, from){
	for (var key in from){
		to[key] = from[key];
	}
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



