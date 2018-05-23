function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
    let i = Math.floor((start + end) / 2);
    // console.log(i, start, end);
    if (arr[i] - i < 0) {
      // go to the right
      start = i + 1;
    } else if (arr[i] - i === 0 && (i === 0 || (arr[i - 1] - (i - 1) < 0))) {
      return i;
    } else {
      end = i - 1;
    }
  }
  
  return -1;
}