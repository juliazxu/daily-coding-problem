// "Sometimes (when I nest them (my parentheticals) too much (like this 
// (and this))) they get confusing."

// Write a function that, given a sentence like the one above, 
// along with the idx of an opening parenthesis, 
// finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 
// (idx of the first parenthesis), the output should be 79 
// (idx of the last parenthesis).

// Edge cases

// test for invalid input
// do early return if you already found paren
// account for when you can't find end paren

const findParen = (str, firstParenIndex) => {
  if (str[firstParenIndex] !== '(') {
    return 'Input start paren index is not valid.';
  }
  let openingParens = {};
  let closingParens = {};
  let idx = 0;
  let identifier = 1;
  let lastItem = null;
  let highestIdentifier = 0;
  for (let char of str) {
    if (char === '(') {
      if (identifier <= highestIdentifier) {
        identifier = highestIdentifier + 1;
      }
      // console.log('char is', char, 'identifier is', identifier, 'idx is', idx, 'highestIdentifier', highestIdentifier)
      openingParens[idx] = identifier;
      lastItem = 'opening';
      if (identifier > highestIdentifier) {
        highestIdentifier = identifier;
      }
    } else if (char === ')') {
      if (lastItem === 'closing') {
        identifier--;
      }
      while (closingParens[identifier]) {
        identifier--;
      }
      // console.log('char is', char, 'identifier is', identifier, 'idx is', idx, 'highestIdentifier', highestIdentifier)
      closingParens[identifier] = idx;
      lastItem = 'closing';
    }
    idx++;
    if (closingParens[openingParens[firstParenIndex]]) {
      return closingParens[openingParens[firstParenIndex]];
    }
  }
  // console.log(openingParens, closingParens);
  return 'No end paren found.';
}

findParen('()()', 0); // 1
findParen('()()', 2); // 3
findParen('()(', 2); // No end paren found.
findParen('()(', 1); // Input start paren index is not valid.
findParen('(he(lll)o)()?', 0); // 9
findParen('(he(lll)o)()?', 3); // 7
findParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)