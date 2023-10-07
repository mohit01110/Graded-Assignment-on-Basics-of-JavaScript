function isValidSudoku(board) {
   
    function hasDuplicates(arr) {
      const set = new Set();
      for (const num of arr) {
        if (num !== '.' && set.has(num)) {
          return true;
        }
        set.add(num);
      }
      return false;
    }
  
    
    for (let i = 0; i < 9; i++) {
      if (hasDuplicates(board[i])) {
        return false;
      }
    }
  
    
    for (let j = 0; j < 9; j++) {
      const column = [];
      for (let i = 0; i < 9; i++) {
        column.push(board[i][j]);
      }
      if (hasDuplicates(column)) {
        return false;
      }
    }
  
    
    for (let box = 0; box < 9; box++) {
      const subBox = [];
      for (let i = Math.floor(box / 3) * 3; i < Math.floor(box / 3) * 3 + 3; i++) {
        for (let j = (box % 3) * 3; j < (box % 3) * 3 + 3; j++) {
          subBox.push(board[i][j]);
        }
      }
      if (hasDuplicates(subBox)) {
        return false;
      }
    }
  
    return true; 
  }
  
  
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ];
  
 
  const result = isValidSudoku(board);
  console.log(result);
  