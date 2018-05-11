// "Sometimes (when I nest them (my parentheticals) too much (like this 
// (and this))) they get confusing."

// Write a function that, given a sentence like the one above, 
// along with the position of an opening parenthesis, 
// finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 
// (position of the first parenthesis), the output should be 79 
// (position of the last parenthesis).

const findParen = (str, firstParenIndex) => {
  let openingParens = {};
  let closingParens = {};
  let position = 0;
  let identifier = 1;
  let lastItem = null;
  for (let letter of str) {
    if (letter === '(') {
      openingParens[position] = identifier;
      identifier++;
      lastItem = 'opening';
    } else if (letter === ')') {
      identifier--;
      closingParens[identifier] = position;
      lastItem = 'closing';
    }
    position++;
  }
  return closingParens[openingParens[firstParenIndex]];
}

findParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)