
function checkWinner () {
  if (defineWinner(
    boardRow[i].children[column],
    boardRow[i].children[column + 1],
    boardRow[i].children[column + 2],
    boardRow[i].children[column + 3] ||

    boardRow[i].children[column],
    boardRow[i + 1].children[column],
    boardRow[i + 2].children[column],
    boardRow[i + 3].children[column] ||

    boardRow[i].children[column],
    boardRow[i - 1].children[column + 1],
    boardRow[i - 2].children[column + 2],
    boardRow[i - 3].children[column + 3] ||

    boardRow[i].children[column] ===
    boardRow[i + 1].children[column + 1],
    boardRow[i + 2].children[column + 2],
    boardRow[i + 3].children[column + 3]
  )) {
    return true
  }
}

function horizontalWinCheck () {
  if(defineWinner(
    boardRow[i].children[column],
    boardRow[i].children[column + 1],
    boardRow[i].children[column + 2],
    boardRow[i].children[column + 3])) {
      return true
    }
  //row[]will stay the same 
  //column[], +1 , +2 , +3 or -1 , -2 , -3
}


function verticalWinCheck () {
  if(defineWinner(
    boardRow[i].children[column],
    boardRow[i + 1].children[column],
    boardRow[i + 2].children[column],
    boardRow[i + 3].children[column],)){
      return true
  }
  //row[], +1 , +2 , +3 or -1 , -2 , -3
  //column[] will stay the same
}

function diagonalWinCheck1 () { //Left to right (upward)
  if(defineWinner(
    boardRow[i].children[column],
    boardRow[i - 1].children[column + 1],
    boardRow[i - 2].children[column + 2],
    boardRow[i - 3].children[column + 3],)) {
      return true
  }
  //row[], -1 , -2 , -3
  //column[], +1 , +2 , +3
}

function diagonalWinCheck2 () { //Left to right (downward)
  if(defineWinner(
    boardRow[i].children[column],
    boardRow[i + 1].children[column + 1],
    boardRow[i + 2].children[column + 2],
    boardRow[i + 3].children[column + 3],)) {
      return true
  }
  // row[], +1 , +2 , +3
  //column[], +1 , +2 , +3
}