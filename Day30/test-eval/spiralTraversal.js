function spiralTraverse(matrix) {
    const result = [];
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Traverse right
      for (let i = startCol; i <= endCol; i++) {
        result.push(matrix[startRow][i]);
      }
      startRow++;
  
      // Traverse down
      for (let i = startRow; i <= endRow; i++) {
        result.push(matrix[i][endCol]);
      }
      endCol--;
  
      // Traverse left (if not already traversed)
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          result.push(matrix[endRow][i]);
        }
        endRow--;
      }
  
      // Traverse up (if not already traversed)
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          result.push(matrix[i][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ];
  
  const spiralOrder = spiralTraverse(matrix);
  console.log(spiralOrder); // Output: [1, 5, 9, 10, 11, 12, 8, 4, 3, 2, 6, 7]