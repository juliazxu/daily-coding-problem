// Given a string, return the longest palindrome contained within that string
// ignore spaces
// ideally, constant space and linear time

// cubic time, constant space
// check if every substring from beginning is a palindrome
// check if every substring from end is a palindrome
// store longest palindrome and return

const longestPalindrome = str => {
  str = str.replace(/\s+/g, '').toLowerCase();
  const checkPalindrome = str => {
    if (str.length <= 1) {
      return true;
    }
    if (str.substring(0, 1) === str.substring(str.length - 1, str.length)) {
      return checkPalindrome(str.substring(1, str.length - 1));
    } else {
      return false;
    }
  }

  let result = ''

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length - 1; j++) {
      let subStr = str.substring(i, str.length - j);
      let startChar = subStr[0]
      let endChar = subStr[subStr.length - 1];
      if (startChar === endChar) {
        let palindromeBool = checkPalindrome(subStr);
        if (palindromeBool) { 
          if (subStr.length > 1 && subStr.length > result.length) {
            result = subStr;
          } 
        }
      }
    }
  }

  return result;
}

longestPalindrome('abcdefg'); // returns ''
longestPalindrome('iamhannahright'); // returns 'hannah'
longestPalindrome('madame'); // returns 'madam'
longestPalindrome('nurses run'); // returns 'nursesrun'
longestPalindrome('aaabbccccccdddd'); // returns 'cccccc'