// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element 
// at index i of the new array is the product of all the numbers in the 
// original array except the one at i. Solve it without using division and in O(n) time.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// this solution is in O(n^2) time

const addItemsArray = array => {
  let result = [];
  for (let j = 0; j < array.length; j++) {
    let multiple = 1;
    for (let i = 0; i < array.length; i++) {
      if (i !== j) {
        multiple = multiple * array[i];
      }
    }
    result.push(multiple);
  }

  return result;
}

// trying to convert array to object and then back again in constant time
// but hit a snag where it still is O(n^2) time

const arrayToObject = array => {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[i] = array[i];
  }
  return obj;
}

const objectToProductArray = object => {
  let result = [];
  let product = 1;
  let i = 0;
  while (obj[i]) {
    product = product * obj[i + 1]
    i++;
  }
  return result;
}