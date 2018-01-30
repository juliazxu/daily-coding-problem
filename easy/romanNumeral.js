// Given a string that is a roman numeral, return the number that numeral 
// translates to a number. Use the helper object.

const ROMAN_NUMERALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralConvert = str => {
  let total = 0;
  let subtractor = 0;
  for (let i = 0; i < str.length; i++) {
    const currVal = ROMAN_NUMERALS[str[i]];
    const nextVal = ROMAN_NUMERALS[str[i + 1]];
    if (!nextVal || currVal > nextVal) {
      total = total + currVal - subtractor;
      subtractor = 0;
    } else {
      subtractor = currVal;
    }
  }
  return total;
}

romanNumeralConvert('XIV') // returns 14
romanNumeralConvert('XVI') // returns 16
romanNumeralConvert('CM') // returns 900
romanNumeralConvert('MCMXCVI') // returns 1996 1000 100 1000 10 100 5 1

var translateRomanNumeral = function (romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  var result = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    DIGIT_VALUES[romanNumeral[i]] >= DIGIT_VALUES[romanNumeral[i + 1]] || !romanNumeral[i + 1] 
    ? result += DIGIT_VALUES[romanNumeral[i]] 
    : result -= DIGIT_VALUES[romanNumeral[i]];
  }
  return result;
};