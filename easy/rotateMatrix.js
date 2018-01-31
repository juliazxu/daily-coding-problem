// code rotateMatrix(matrix, int)
// where given a matrix (two-dimensional array) and an integer
// rotate the matrix 90 degrees clockwise for each count of the integer (counterclockwise if negative)

// only 4 possible outcomes for every matrix
// check to see if the int is 0 or some multiple of 4, then return matrix directly
// otherwise, if positive, recursively rotate the matrix clockwise
// if negative, then take 4 - x and then recursively rotate the matrix

var rotateMatrix = (matrix, int) => {
  if (Math.abs(int % 4 === 0)) { return matrix; }
  let rotations;
  int > 0 ? rotations = int : rotations = 4 - (Math.abs(int) % 4);

  const rotateClockwise = (newMatrix, oldMatrix, h, w) => {
    newMatrix[newMatrix.length - 1].push(oldMatrix[h][w]);
    if (h === 0 && w === oldMatrix[0].length - 1) {
      return newMatrix;
    }
    if (h === 0) {
      newMatrix.push([]);
      h = oldMatrix.length;
      w++;
    }
    return rotateClockwise(newMatrix, oldMatrix, h - 1, w);
  }

  let newMatrix = matrix;
  while (rotations > 0) {
    newMatrix = rotateClockwise([[]], newMatrix, newMatrix.length - 1, 0);
    rotations--;
  }

  return newMatrix;
}

rotateMatrix([[1,2,3],[4,5,6]], 1) // returns [[4,1],[5,2],[6,3]]
rotateMatrix([['A1','B1','C1'],['A2','B2','C2'],['A3','B3','C3']], 1)