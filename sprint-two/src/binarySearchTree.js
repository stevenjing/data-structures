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

    if (node.left !== null && value <= node.value) {
      search(value, node.left);
    }
    
    if (node.right !== null) {
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

  if (! this.contains(value)) {
    return 'tree does not contain ' + value;
  }


  var parentNode = this.find(value, this);
  
  if (parentNode === null) {

    if (this.left === null && this.right === null){
      return {};
    } else if (this.left === null || this.right === null) {
      return this.left || this.right;
    } else {
      debugger;
      var newNode = this.findMin(this.right);
      this.delete(newNode.value, newNode);
      this.value = newNode.value;
    }
  } else {

  if (value < parentNode.value) { // this tells is the delet node is on the left
    
    if (parentNode.left.left === null && parentNode.left.right === null) {
      parentNode.left = null;
    } else if (parentNode.left.left === null || parentNode.left.right === null) {
        // case 2 left side - only one child on left sdie
      parentNode.left = parentNode.left.left || parentNode.left.right;
    } else {
      var newNode = this.findMin(parentNode.left.right);
      this.delete(newNode.value, newNode);
      parentNode.left.value = newNode.value;
 
    }

  } else if ( value > parentNode.value) {  // this tells us the delete node is on the right.

    // case 1
    if (parentNode.right.left === null && parentNode.right.right === null) {
      parentNode.right = null;
    } else if (parentNode.right.left === null || parentNode.right.right === null) {
      parentNode.right = parentNode.right.left || parentNode.right.right;
    } else {
      var newNode = this.findMin(parentNode.right.right);
      this.delete(newNode.value, newNode);
      parentNode.right.value = newNode.value;
    }
  }  
}
};

BinarySearchTree.prototype.find = function (value, node) {

  var match = null;
  node = node || this;


  var search = function(value, node) {

    if (match !== null) {
      return;
    }

    if ( node.left && value === node.left.value) {
      match = node;
      return;
    } 

    if ( node.right && value === node.right.value) {
      match = node;
      return;
    }
 
    if (node.left !== null && value <= node.value) {
      search(value, node.left);
    }
    
    if (node.right !== null) {
      search(value, node.right);
    }
  };
  
  search(value, node);
  return match;
};

BinarySearchTree.prototype.findMin = function (node) {

  node = node || this;

  var min = node.value;
  var minNode = node;

  var search = function(node) {

    if (node.value < min) {
      min = node.value;
      minNode = node;
    }

    if (node.left !== null) {
      search(node.left);
    }

  };

  search(node);
  return minNode;

};

BinarySearchTree.prototype.insertNode = function (rootNode, insertNode) {

  if (rootNode.value > insertNode.value) {
    if (rootNode.left === null){
      rootNode.left = insertNode;
    } else {
      rootNode.insertNode(rootNode.left, insertNode);
    }
  }

  if (rootNode.value < insertNode.value) {
    if (rootNode.right === null){
      rootNode.right = insertNode;
    } else {
      rootNode.insertNode(rootNode.right, insertNode);
    }
  }
};









/*
 * Complexity: What is the time complexity of the above functions?
 * The functions above are O(log n).
 */
