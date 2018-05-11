let ganoush = { type: 'cat', age: 4, temperament: 'playful' }

let meow = (length) => { 
  return `${this.type} says meow ${length} times`;
}

meow.call(ganoush, 3);