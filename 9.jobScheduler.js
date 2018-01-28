// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, 
// and calls f after n milliseconds.

let f = () => {
  alert('Schedule a job!');
}

let n = 2000;

const jobScheduler = (f, n) => {
  this.setTimeout(f, n);
}

jobScheduler(f, n);