// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, 
// count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa, 'ka', and 'ak'.

// get all possible consecutive 2 digit numbers and their index
// create all combinations that fit that index

let map = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z'
}
111
[['a', 1], ['k', 2]]
[['ak', 3], ['aa', 2], ['ka', 3]]
[['ak', 3], ['aaa', 3], ['ka', 3]]

var decodeMessage = num => {
  let results = [];
  let firstNum = num.toString()[0];
  let secondNum = num.toString()[1];
  results.push([map[Number(firstNum)], 1]);
  if (map.Number(firstNum + secondNum)) {
    results.push([map[Number(firstNum + secondNum)], 2]);
  }
  

}

// 123

// index0 = [1, 12];
// index1 = [2, 23];
// index2 = [3];

// [12, 123, 122, 1223]

// [1'2'3, 12'3, 1'23]

var decodeMessage = num => {
  let numString = num.toString();
  let numbersString = [];
  let prevNum;
  for (let i = 0; i < numString.length; i++) {
    numbersString.push({index: i, value: [numString[i]]});
    if (prevNum) {
      if (Number(prevNum + numString[i]) <= 26) {
        numbersString.push({index: i - 1, value: [prevNum + numString[i], i]});
      }
    }
    prevNum = numString[i];
  }

  let resultNumberString = [];

  for (let j = 0; j < numbersString.length; j++) {
    if (numbersString[j].index === 0) {
      resultNumberString.push(numbersString[j].value);
    }
    for (let k = 1; k < numString.length; k++) {
      if (numbersString[j].index === k) {
        let temp = [];
        resultNumberString = resultNumberString.map(item => item + numbersString[j].value);
      }
    }
  }

  console.log(resultNumberString);
  return resultNumberString.length;
}