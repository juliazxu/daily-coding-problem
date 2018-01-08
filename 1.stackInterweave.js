// This problem was asked by Google.

// Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

// Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue.

// For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

// Hint: Try working backwords from the end state.

// pop everything except the first into a queue
// [1]; [5, 4, 3, 2]
// dequeue
// [1, 5]; [4, 3, 2]
// enqueue everything from the queue and push it to stack
// [1, 5, 4, 3, 2]; [];

// repeat except now pop everything except the first two

class Stack {
  constructor(array) {
    this.data = array;
    this.length = array.length;
  }

  pop() {
    const lastItem = this.data[this.data.length - 1];
    this.data = this.data.slice(0, this.data.length - 1);
    this.length--;
    return lastItem;
  }

  push(item) {
    this.data.push(item);
    this.length++;
  }
}

class Queue {
  constructor(array) {
    this.data = array;
    this.length = array.length;
  }

  enqueue(item) {
    this.data.push(item);
    this.length++;
  }

  dequeue() {
    const firstItem = this.data[0];
    this.data.shift();
    this.length--;
    return firstItem;
  }
}

const interweave = array => {
  let stack = new Stack(array);
  let queue = new Queue([]);

  for (let i = 1; i < stack.length; i++) {
    while (stack.length > i) {
      queue.enqueue(stack.pop());
    }
  
    stack.push(queue.dequeue());
  
    while (queue.length > 0) {
      stack.push(queue.dequeue());
    }
    console.log('stack is', stack, 'queue is', queue);
  }

  return stack;
}

interweave([1, 2, 3, 4, 5]);
interweave([1, 2, 3, 4, 5, 6]);