describe ('doubly linked list tests', function() {


  beforeEach(function() {
    myList = DoublyLinkedList();
  });

  it ('should add a node to the head of the list', function() {
    myList.addToHead(0);
    expect(myList.head.value === 0).to.equal(true);
    expect(myList.tail.value === 0).to.equal(true);
    expect(myList.head.next).to.equal(null);
    expect(myList.head.prev).to.equal(null);
    expect(myList.tail.next).to.equal(null);
    expect(myList.tail.prev).to.equal(null);
  });
  it ('should handle adding multiple nodes to the doubly linked list', function() {
    for (var i = 0; i < 10; i++) {
      myList.addToHead(i);
    }
    expect(myList.head.value === 9).to.equal(true);
    expect(myList.head.next.value === 8).to.equal(true);
    expect(myList.tail.value === 0).to.equal(true);
    expect(myList.tail.prev.value === 1).to.equal(true);
  });
  it ('should remove a node from the tail of the list', function() {
    myList.addToHead(6);
    myList.addToHead(4);
    myList.removeTail();
    expect(myList.contains(6)).to.equal(false);
    expect(myList.contains(4)).to.equal(true);
  });
  it ('should describe if a node is contained in the list', function() {
    myList.addToHead(6);
    expect(myList.contains(6)).to.equal(true);
    expect(myList.contains(4)).to.equal(false);
  });
  it ('should not contain a node that was removed', function() {
    myList.addToHead(6);
    myList.removeTail();
    expect(myList.contains(6)).to.equal(false);
  });
});