'use strict';

//Complete this algo
const isLoop = linkedlist => {
  const storage = {};
  let currentNode = linkedlist.head;
  while (currentNode) {
    //if storage contains node.next
    if (currentNode.value in storage) {
      //return node object
      return true;
      //extra-credit:
      // return currentNode;
    } else {
      //else add node into storage
      storage[currentNode.value] = currentNode;
    }
    currentNode = currentNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
