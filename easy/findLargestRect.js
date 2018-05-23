// given a N by M matrix consistently only of 1's and 0's, 
// find the largest rectangle containing only 1's and return its area.

let rect1 = [[1, 0, 0, 0],
[1, 0, 1, 1],
[1, 0, 1, 1]
[0, 1, 0, 0]];

let rect2 = [[1, 1, 1, 1],
[0, 1, 0, 1],
[1, 1, 1, 0]]

const findRect = rect => {
  // code
  return area;
}

findRect(rect1); //return 4

// Approach 1: worst case scenario is n^2

// traverse left to right, top to down
// store all rectangles and their edges in an array
// every time you traverse, check to see if it belongs to any of the rectangles or if it creates a new rectangle
// at the end, calculate the area of all rectangles
// return the largest area

// some ways to optimize: if one rectangle is closed and you find a larger rectangle, you can get rid of the other one

// Approach 2: start from 0,0 and check sides
// If 1, check all sides to see if connects to anything
// 0,0: 1
// 0,1: 1
// 0,2: 1
// 0,3: 1
// 0,4: 1
// if it connects to something, keep going until you reach 0 or null
// then check if it extends the other way until you reach 0 or null
// 1,0: 0
// new rect [0, 0] - [0, 4], area = 4

// 0,1: 1
// already checked the left and right so we only check down
// 1,1: 1
// 1,2: 1
// new rect [0,1] - [1,2], area = 3
// smaller than the other one so you don't store it


