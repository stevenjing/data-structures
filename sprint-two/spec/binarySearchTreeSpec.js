describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should calculate the depth of a tree', function() {
    expect(binarySearchTree.depth()).to.equal(1);
    binarySearchTree.insert(8);
    binarySearchTree.insert(4);
    expect(binarySearchTree.depth()).to.equal(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    expect(binarySearchTree.depth()).to.equal(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.depth()).to.equal(5);
  });

  // test to see if a balancing function balances a lopsided tree

  it('should count the number of nodes in the tree', function () {

    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    expect(binarySearchTree.size()).to.be.equal(5);
    binarySearchTree.insert(10);
    binarySearchTree.insert(13);
    binarySearchTree.insert(9);
    expect(binarySearchTree.size()).to.be.equal(8);
    binarySearchTree.insert(8);
    expect(binarySearchTree.size()).to.be.equal(9);
  });

  it('should return an sorted array from the binary tree', function() {

    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(11);
    binarySearchTree.insert(6);
    binarySearchTree.insert(12);
    binarySearchTree.insert(13);
    expect(binarySearchTree.getTreeArray()).to.eql([2, 3, 5, 6, 7, 11, 12, 13]);
  });

  it('should balance a tree to the depth of log N when given an unbalanced tree', function() { 

    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(11);
    binarySearchTree.insert(6);
    binarySearchTree.insert(12);
    binarySearchTree.insert(13);

    // depth check
    expect(binarySearchTree.depth()).to.equal(5);
    // balance binary tree
    binarySearchTree = binarySearchTree.balancer();
    // check to see new root is 3
    expect(binarySearchTree.value).to.equal(6);
    // check to see the depth is now correct
    expect(binarySearchTree.depth()).to.equal(4);
  });

  it('should find and return a node with a specified value', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);

    expect(binarySearchTree.find(10).value).to.equal(9); 
    expect(binarySearchTree.find(7).value).to.equal(6);
    expect(binarySearchTree.find(6).value).to.equal(9);
    expect(binarySearchTree.find(9).value).to.equal(11);
  });

  it('find the minimum value in the tree', function() {

    binarySearchTree.insert(2);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);

    expect(binarySearchTree.findMin().value).to.equal(2);

    binarySearchTree2 = BinarySearchTree(10);
    binarySearchTree2.insert(8);
    binarySearchTree2.insert(7);
    binarySearchTree2.insert(6);
    binarySearchTree2.insert(5);
    binarySearchTree2.insert(4);
    binarySearchTree2.insert(3);
    binarySearchTree2.insert(2);

    expect(binarySearchTree2.findMin().value).to.equal(2);

  });

  it('should insert a node in the corrent position in the tree if given a node and a starting point in the tree', function() {

    binarySearchTree3 = BinarySearchTree(3);
    binarySearchTree4 = BinarySearchTree(4);
    binarySearchTree2 = BinarySearchTree(2);
    binarySearchTree8 = BinarySearchTree(8);
    binarySearchTree7 = BinarySearchTree(7);

    binarySearchTree.insertNode(binarySearchTree, binarySearchTree3);
    binarySearchTree.insertNode(binarySearchTree, binarySearchTree4);
    binarySearchTree.insertNode(binarySearchTree, binarySearchTree2);
    binarySearchTree.insertNode(binarySearchTree, binarySearchTree8);
    binarySearchTree.insertNode(binarySearchTree, binarySearchTree7);

    expect(binarySearchTree.getTreeArray()).to.eql([2, 3, 4, 5, 7, 8]);
  });

  it('should delete a node in the tree and still retain cohesion to the rest of the tree', function() { 

    binarySearchTree.insert(2);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);

    expect(binarySearchTree.size()).to.equal(8);
    binarySearchTree.delete(9);
    expect(binarySearchTree.getTreeArray()).to.eql([5, 6, 7, 2, 10, 11, 12]);
    binarySearchTree.delete(7);
    expect(binarySearchTree.getTreeArray()).to.eql([2, 5, 6, 9, 10, 11]);
    debugger;
    binarySearchTree.delete(5);
    expect(binarySearchTree.getTreeArray()).to.eql([2, 6, 9, 10, 11]);
  });



});