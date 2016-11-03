

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (let i = 0; i < this._limit; i++ ) {
    this._storage.set(i, {});    
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  bucket[k] = v; 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  delete bucket[k];   
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


