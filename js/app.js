/*-------------------------------- Constants --------------------------------*/

const player1Color = "black"

const player2Color = "white"

const emptySlot = "mediumturquoise"

/*-------------------------------- Variables --------------------------------*/

let turn, winner, board

/*------------------------ Cached Element References ------------------------*/

const boardRow = document.querySelectorAll(".row")

const boardSlot = document.querySelectorAll(".slot")

const turnDisplay = document.querySelector("#game-status")

const resetBtn = document.querySelector("reset-button")
/*----------------------------- Event Listeners -----------------------------*/

//"click" event listener for every slot on the board. 
boardSlot.forEach(slot => slot.addEventListener("click", (e) =>{
  console.log(`
  ${e.target.parentElement.rowIndex}, 
  ${e.target.cellIndex}`) //2d Array: rowIndex first and within rowIndex is cellIndex
} )) //cellIndex is essentially = the value of the column 

// Array.prototype.forEach.call(boardSlot, (slot)=>{
//   slot.addEventListener("click", handleClick)
//   slot.style.backgroundColor = "mediumturquoise"
// })

boardSlot.forEach.call(boardSlot, (slot)=>{
  slot.addEventListener("click", handleClick)
  slot.style.backgroundColor = emptySlot
})
//console.log will display rowIndex and then cellIndex like coordinates. 
//NOT NEEDED FOR GAMEPLAY BUT SHOWS THAT EACH SLOT ON THE BOARD IS RESPONSIVE TO A CLICK
//Can attach a function like a "handle click" once it is written
//This is going to help me define each type of win function  
  //which values - rowIndex and cellIndex will need to change

/*-------------------------------- Functions --------------------------------*/


init ()


function init () {
  turn = 1
  turnDisplay.innerText = "Player 1's turn"
  winner = null
  // resetBtn.setAttribute("hidden", true)
  render()
}




function render () {


  if (turn === 1) {
    turnDisplay.innerText = "Player 1's Turn"
  } else {
    turnDisplay.innerText = "Player 2's Turn"
  }
}

//List of functions for the game
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
  turn *= -1
  render()
}

function defineWinner (slot1, slot2, slot3, slot4) {
  return slot1 === slot2 === slot3 === slot4 !== emptySlot
}

function horizontalWinCheck () {
  for (let x = 0; x < boardRow.length; x++) {
    for (let y = 0; y < 4; y++) {
      if(defineWinner(
        boardRow[x].children[y].style.backgroundColor,
        boardRow[x].children[y + 1].style.backgroundColor,
        boardRow[x].children[y + 2].style.backgroundColor,
        boardRow[x].children[y + 3].style.backgroundColor,
      )) {
        return true
      }
    }
  }  
}

function verticalWinCheck () {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 7; y++) {
      if(defineWinner(
        boardRow[x].children[y].style.backgroundColor,
        boardRow[x + 1].children[y].style.backgroundColor,
        boardRow[x + 2].children[y].style.backgroundColor,
        boardRow[x + 3].children[y].style.backgroundColor,
      )) {
        return true
      }
    }
  }
}

function diagonaDownlWinCheck () {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 4; y++) {
      if(defineWinner(
        boardRow[x].children[y].style.backgroundColor,
        boardRow[x + 1].children[y + 1].style.backgroundColor,
        boardRow[x + 2].children[y + 2].style.backgroundColor,
        boardRow[x + 3].children[y + 3].style.backgroundColor,
      )) {
        return true
      }
    }
  }
}

diagonalUpWinCheck () {
  for (let x = 0; x > 2; x--) {
    for (let y = 5; y > 2; y--) {
      if(defineWinner(
        boardRow[x].children[y].style.backgroundColor,
        boardRow[x - 1].children[y + 1].style.backgroundColor,
        boardRow[x - 2].children[y + 2].style.backgroundColor,
        boardRow[x - 3].children[y + 3].style.backgroundColor,
      )) {
    }
  }
}


function tieGameCheck () {
  //all slots backgroundColor !== white and winner === null
}

  //4. Check for tie game
    //a. basic premise is if all indexes are !== the starting color/value
      //& a winner has not been determined - the game is a tie

  //5. Render Function
    //a. Continually update the board, message displaying players turn and display winner message if true
    //b. remove hidden attribute from the reset button allowing the game to be reinitialized

  //6. Init Function
    //a. Initialize the board to its original state 
    //b. Reset the player turn value to player 1
    //c. Reprompt input for player names
    //d. Hide the reset button


