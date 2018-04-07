// Write a function fib() that takes an integer nn and 
// returns the nnth Fibonacci ↴ number.

// fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3

// use recursion to steadily increment
// use memoization to store previously computed numbers
// first time will be O(n) but future computations will be amortized
// store trades off time complexity for space complexity

// only pass in store

let store = {0: 0, 1: 1}, storeHighestIteration = 1;

const fib = n => {
  if (n < 0) {
    return 'Integer cannot be negative.'
  }

  const increment = (store, end) => {
    if (store[end]) {
      return store[end];
    }

    store[storeHighestIteration + 1] = store[storeHighestIteration] + store[storeHighestIteration - 1]
    storeHighestIteration++;

    return increment(store, end);
  }

  if (store[n]) {
    return store[n];
  } else {
    return increment(store, n);
  }
}

//without polluting global namespace

const fib = (() => {
  const memo = [];
  return n => {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    if (!memo[n - 1]) {
      memo[n - 1] = fib(n - 1);
    }
    if (! memo[n - 2]) {
      memo[n - 2] = fib(n - 2);
    }
    return memo[n - 1] + memo[n - 2];
  }
})();