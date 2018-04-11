// Write a function to find the rectangular 
// intersection of two given rectangles.

// Your output rectangle should use this format as well.

// Solution

// 1: Brute force: find every coordinate that overlaps, choose the one with least x and y

// 2: Find common x and y

// find the x and y start/ends of both
// rect1: { x: [1, 7], y: [1, 4] }
// rect2: { x: [5, 8], y: [2, 8] }

// find overlap
// find the higher of the 2 beginning numbers, and find the lower of the 2 end numbers
// if they don't intersect, then the the rectangles don't overlap
// x: 5-7, y: 2-4

// create new rect of overlap
// var rect3 = { leftX: 5, bottomY: 2, width: 2, height: 2 }

var myRectangle1 = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // width and height
  width: 6,
  height: 3,

};

var myRectangle2 = {

  // coordinates of bottom-left corner
  leftX: 5,
  bottomY: 2,

  // width and height
  width: 3,
  height: 6,

};

const findIntersect = (rect1, rect2) => {
  let leftX = Math.max(rect1.leftX, rect2.leftX);
  let rightX = Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width);

  let bottomY = Math.max(rect1.bottomY, rect2.bottomY);
  let topY = Math.min(rect1.bottomY + rect1.height, rect2.bottomY + rect2.height);

  if (rightX <= leftX || topY <= bottomY) {
    return 'Rectangle areas do not intersect.';
  }

  let newRect = {
    leftX: leftX,
    bottomY: bottomY,

    width: rightX - leftX,
    height: topY - bottomY,
  };

  return newRect;
}

findIntersect(myRectangle1, myRectangle2);