/*-------------------------------- Constants --------------------------------*/

const player1Color = "black"

const player2Color = "white"

const emptySlot = "mediumturquoise"

/*-------------------------------- Variables --------------------------------*/

let turn, board, count

/*------------------------ Cached Element References ------------------------*/

const boardRow = document.querySelectorAll(".row")

const boardSlot = document.querySelectorAll(".slot")

const turnDisplay = document.querySelector("#game-status")

const resetBtn = document.querySelector("#reset-button")

/*-------------------------------- Functions --------------------------------*/

init ()

function init () {
  boardSlot.forEach.call(boardSlot, (slot)=>{
    slot.addEventListener("click", handleClick)
    slot.style.backgroundColor = emptySlot
  })
  turn = 1
  count = 1
  resetBtn.setAttribute("hidden", true)
  render()
}

function render () {
  if
  (horizontalWinCheck() ||
  verticalWinCheck() ||
  diagonalUpWinCheck() ||
  diagonaDownlWinCheck()) {
    if (turn === 1) {
      turnDisplay.innerText = "Player 1 Wins!"
    } else {
      turnDisplay.innerText = "Player 2 Wins!"
    }
    endGame()
  }
  else if (tieCheck()) {
    turnDisplay.innerText = "It's a Tie!"
    endGame()
  } else {
    if (turn === 1) {
      turnDisplay.innerText = "Player 1's Turn"
    } else {
      turnDisplay.innerText = "Player 2's Turn"
    }
  }
}

function handleClick (e) {
  let column = e.target.cellIndex
  let row = []
  for (let i = 5; i > -1; i--) {
    if (boardRow[i].children[column]
    .style.backgroundColor === emptySlot) {
      row.push(boardRow[i].children[column])
      if (turn === 1) {
        row[0].style.backgroundColor = player1Color
      } else {
        row[0].style.backgroundColor = player2Color
      }
    } 
  }
  render()
  turn *= -1
  count += 1
}

function horizontalWinCheck () {
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 4; y++) {
      console.log(boardRow[x].children[y].style.backgroundColor)
      if (
        boardRow[x].children[y].style.backgroundColor === 
        boardRow[x].children[y + 1].style.backgroundColor && 
        boardRow[x].children[y].style.backgroundColor === 
        boardRow[x].children[y + 2].style.backgroundColor && 
        boardRow[x].children[y].style.backgroundColor === 
        boardRow[x].children[y + 3].style.backgroundColor && 
        boardRow[x].children[y].style.backgroundColor !== 
        emptySlot
      ) {
        return true
      }
    }
  }
}  

function verticalWinCheck () {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 7; y++) {
      if (
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 1].children[y].style.backgroundColor && 
        boardRow[x].children[y].style.backgroundColor === 
        boardRow[x + 2].children[y].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 3].children[y].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor !==
        emptySlot
      ) {
        return true
      }
    }
  }
}

function diagonaDownlWinCheck () {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 4; y++) {
      if (
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 1].children[y + 1].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 2].children[y + 2].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 3].children[y + 3].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor !==
        emptySlot
      ) {
        return true
      }
    }
  }
}

function diagonalUpWinCheck () {
  for (let x = 0; x < 3; x++) {
    for (let y = 5; y > 2; y--) {
      if (
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 1].children[y - 1].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 2].children[y - 2].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor ===
        boardRow[x + 3].children[y - 3].style.backgroundColor &&
        boardRow[x].children[y].style.backgroundColor !==
        emptySlot
      ) {
        return true
      }
    }
  }
}

//incorporate logic to stop board from being clicked after game is won.
  //use "active" logic that I used in Connect 4

function tieCheck () {
  return count === 42
}

function endGame () {
  boardSlot.forEach.call(boardSlot, (slot)=>{
    slot.removeEventListener("click", handleClick)
  })
}