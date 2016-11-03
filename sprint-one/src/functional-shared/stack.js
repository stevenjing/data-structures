var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var obj = {};
  obj.length = 0;

  extend(obj, stackMethods);
  return obj;
};

var extend = function(to, from){
	for (var key in from){
		to[key] = from[key];
	}
=======
  var someInstance = {};

  someInstance.storage = {};
  someInstance.length = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
>>>>>>> 82013ea91a37912720e512fce6152c655f15015c
};

var stackMethods = {};

<<<<<<< HEAD
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


=======
stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
    var top = this.storage[this.length];
    delete this.storage[this.length];
    return top;
  }
};
>>>>>>> 82013ea91a37912720e512fce6152c655f15015c

stackMethods.size = function() {
  return this.length;
};