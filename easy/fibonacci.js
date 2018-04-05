// Write a function fib() that takes an integer nn and 
// returns the nnth Fibonacci ↴ number.

fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3

// use recursion to steadily increment
// use memoization to store previously computed numbers
// first time will be O(n) but future computations will be amortized
// store trades off time complexity for space complexity

let store = {0: 0, 1: 1}, storeHighestIteration = 1;

const fib = n => {
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return 'Integer cannot be negative.'
  }

  const increment = (iteration, prevVal, currVal, end) => {
    if (iteration === end) {
      return currVal;
    }
    while (iteration < end) {

      let x = currVal;
      currVal = prevVal + currVal;
      prevVal = x;
      iteration++;

      if (iteration > storeHighestIteration) {
        store[iteration] = currVal;
        storeHighestIteration = iteration;
      }

      return increment(iteration, prevVal, currVal, end);
    }
  }
  if (store[n]) {
    return store[n];
  } else {
    return increment(storeHighestIteration, store[storeHighestIteration] - 1, store[storeHighestIteration], n);
  }
}