'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  //base case:
  //if the array has a length of 1 and it does not match our target. return false
  if (array.length === 1) {
    return target === array[0];
  }

  let midpoint = Math.floor(array.length / 2);
  //if the midpoint of the array is our target value. return true.
  if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  }
  // else set new midpoint and call binarySearch()
  else {
    return binarySearch(array.slice(midpoint, array.length), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
