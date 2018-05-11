// "Sometimes (when I nest them (my parentheticals) too much (like this 
// (and this))) they get confusing."

// Write a function that, given a sentence like the one above, 
// along with the idx of an opening parenthesis, 
// finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 
// (idx of the first parenthesis), the output should be 79 
// (idx of the last parenthesis).

const findParen = (str, firstParenIndex) => {
  let openingParens = {};
  let closingParens = {};
  let idx = 0;
  let identifier = 1;
  for (let char of str) {
    if (char === '(') {
      openingParens[idx] = identifier;
      identifier++;
    } else if (char === ')') {
      identifier--;
      closingParens[identifier] = idx;
    }
    idx++;
  }
  return closingParens[openingParens[firstParenIndex]];
}

findParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)