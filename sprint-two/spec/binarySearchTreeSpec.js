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
});