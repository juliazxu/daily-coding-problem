// new problem: balancedParens(str)

// given a string, determine if the parens, brackets, and braces contained in the string are balanced
"(){}[]" // true
"([]{()})" // true
"([)]" // false
"({}(" // false

// create a map function with beginning and ending combinations
// iterate through the string
// if the character is the end of a combination, check to see if there's a match in the map
// if the beginning character isn't the last character in stack, then return false
// if there is a beginning char in a stack, then store in a stack
// If stack is empty, return true.

const map = {
  ')': '(',
  '}': '{',
  ']': '[',
}

const balancedParens = (str) => {
  let stack = '';
  for (const char of str) {
    // if char is an ending char
    if (map[char]) {
      if (stack[stack.length - 1] === map[char]) {
        stack = stack.slice(0, -1);
      } else {
        return false;
      }
    // if char is a starting char
    } else if (Object.values(map).includes(char)) {
      stack = stack + char;
    }
  }

  if (stack === '') {
    return true;
  }
}

balancedParens("(){}[]");
balancedParens("([]{()})");
balancedParens("([)]");
balancedParens("({}(");