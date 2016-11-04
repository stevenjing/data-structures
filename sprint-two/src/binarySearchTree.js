var BinarySearchTree = function(value) {
  
  var obj = Object.create(BinarySearchTree.prototype);
  

  obj.value = value || null;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function (value, node) {


  node = node || this;

  if (node.value === null) {
    node.value = value;
  }

  if (node.value < value) {
    if (node.right !== null) {
      node.insert(value, node.right);
    } else {
      node.right = BinarySearchTree(value);
    }
  }

  if (node.value > value) {
    if (node.left !== null) {
      node.insert(value, node.left);
    } else {
      node.left = BinarySearchTree(value);
    }
  }

};

BinarySearchTree.prototype.contains = function (value, node) {

  var match = false;
  node = node || this;


  var search = function(value, node) {

    if (value === node.value) {
      match = true;
    }


    if (node.left !== null && value <= node.left.value) {
      search(value, node.left);
    }
    
    if (node.right !== null && value >= node.right.value) {
      search(value, node.right);
    }
  };

  // if time come back and look at the potential recursive pattern below
  // return (contains(left) || contains(right));

  search(value, node);
  return match;

}; 

BinarySearchTree.prototype.depthFirstLog = function (cb, node) {

  node = node || this;

  cb(node.value);

  if (node.left !== null) {
    node.depthFirstLog(cb, node.left);
  }
    
  if (node.right !== null) {
    node.depthFirstLog(cb, node.right);
  }
};

BinarySearchTree.prototype.depth = function(node) {

  node = node || this;
  
  // debugger;

  if (node.left === null && node.right === null) {
    return 1;
  }

  if (node.left === null && node.right !== null) {
    return node.depth(node.right) + 1;
  }

  if (node.right === null && node.left !== null) {
    return node.depth(node.left) + 1;
  }

  return (Math.max(node.depth(node.left) + 1, node.depth(node.right) + 1));

};

BinarySearchTree.prototype.balancer = function() {

// if depth is greater than the log ofnumber of nodes it is out of balance
// math.ceil of the log of the # of nodes

};

BinarySearchTree.prototype.size = function(node) {

   node = node || this;
  
  // debugger;

  if (node.left === null && node.right === null) {
    return 1;
  }

  if (node.left === null && node.right !== null) {
    return node.size(node.right) + 1;
  }

  if (node.right === null && node.left !== null) {
    return node.size(node.left) + 1;
  }

  return node.size(node.left) + node.size(node.right) + 1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
