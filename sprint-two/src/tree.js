var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var wasFound = false;
  // if target === tree.value
    // set wasFound to true;
  // else
    // run contains on all children
  var fun = function(node) {
    if (target === node.value) {
      wasFound = true;
    }
    node.children.forEach(function(child) {
      fun(child);
    });
  };
  fun(this);
  return wasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
