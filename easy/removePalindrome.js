// This problem was asked by Google.

// Given a string which we can delete at most k, return whether you can make a palindrome.

// For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

// start from front and back
// if the letter is the same, continue
// if not, then check if the next letter is the same as any of the two (first front, then back)
// continue until you hit the same letter (if you don't, then you can't make palindrome)
// remove all letters in between, keep track of #

removePalin('waterrfetawx', 2);
// true
removePalin('waterrfetawx', 1);
// false
removePalin('waterrfetawx', 3);
// true
removePalin('kayak', 0);
// true
removePalin('kayak', 1);
// true
removePalin('kayyak', 0);
// true
removePalin('kayybak', 1);
// true
removePalin('kayybak', 0);
// false
removePalin('pkayybak', 1);
// false

const removePalin = (str, num) => {
  let frontLetter = str[0];
  let backLetter = str[str.length - 1];
  if (frontLetter !== backLetter) {
    nextLetterFront = str[0] + 1;
    nextLetterBack = str[str.length - 1]
  }
}