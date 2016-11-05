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

  var array = this.getTreeArray(this);

  var newBinarySearchTree = function(start, end) {
    
    var mid = Math.floor((start + end) / 2);

    if (start > end) {
      return null;
    }

    var root = new BinarySearchTree(array[mid]);  // new node = 3; new node = 2
    root.left = newBinarySearchTree(start, mid - 1);
    root.right = newBinarySearchTree(mid + 1, end);
    return root;
  };
  
  return newBinarySearchTree(0, array.length - 1);

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

BinarySearchTree.prototype.getTreeArray = function (node) { 

  node = node || this;

  var results = [];
  var inOrderTraversal = function (node) {
    if (node !== null) {
      inOrderTraversal(node.left);
      results.push(node.value);
      inOrderTraversal(node.right);
    }
  };
  inOrderTraversal(node);

  return results;
};

BinarySearchTree.prototype.delete = function (value, node) {

  // node = node || this;

if (! this.contains(value)) {
  return 'tree does not contain ' + value;
}



};














/*
 * Complexity: What is the time complexity of the above functions?
 * The functions above are O(log n).
 */
