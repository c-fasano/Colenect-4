/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let turn, winner, board

/*------------------------ Cached Element References ------------------------*/

const boardRow = document.querySelectorAll(".row")

const boardSlot = document.querySelectorAll(".slot")

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
  slot.style.backgroundColor = "mediumturquoise"
})
//console.log will display rowIndex and then cellIndex like coordinates. 
//NOT NEEDED FOR GAMEPLAY BUT SHOWS THAT EACH SLOT ON THE BOARD IS RESPONSIVE TO A CLICK
//Can attach a function like a "handle click" once it is written
//This is going to help me define each type of win function  
  //which values - rowIndex and cellIndex will need to change

/*-------------------------------- Functions --------------------------------*/





function init () {
  turn
}




function render () {

}

//List of functions for the game
function handleClick (e) {
  //declare empty variables for columns and rows 
    //reference event listener above
  let column = e.target.cellIndex
  let row = []
  let playerTurn = 1
  let player1Color = "black"
  let player2Color = "white"

  for (let i = 5; i > -1; i--) {
    if (boardRow[i].children[column]
    .style.backgroundColor === "mediumturquoise") {
      row.push(boardRow[i].children[column])
      if (playerTurn === 1) {
        row[0].style.backgroundColor = 
        player1Color
      } else {
        row[0].style.backgroundColor = 
        player2Color
      }
    }
  }
}

  //1.  handleClick
    //a. Will change the color of the slot click on to represent the id of 
    //the player that clicked
    //b. Change the value of the player turn and update the message showing whose turn it is




function winnerDef (slot1, slot2, slot3, slot4) {
  if (slot1 === slot2 === slot3 === slot4 !== "mediumturquoise")
    return true
}
    
  //2. defineWinner / checkWinner (Boolean)
    //a. basic definition: four slots / table cells are the same color 
    //b. within this function I can call functions for each type of winCheck 
      //1a. Horixontal, Vertical, Diagonal R -> L, Diagonal L-> R
      //2a. If any of these win conditions are satisfied the game is over
        //1b. If not - the game will continue

function horizontalWinCheck () {
  //row[]will stay the same 
  //column[], +1 , +2 , +3 or -1 , -2 , -3
}


function verticalWinCheck () {
  //row[], +1 , +2 , +3 or -1 , -2 , -3
  //column[] will stay the same
}

function diagonalWinCheck1 () { //Left to right (upward)
  //row[], -1 , -2 , -3
  //column[], +1 , +2 , +3
}

function diagonalWinCheck2 () { //Left to right (downward)
  // row[], +1 , +2 , +3
  //column[], +1 , +2 , +3
}

  //3. Horizontal, Vertical, Diagonal 2x winCheck (Boolean)
    //a. Iterate over the 2d array and check for:
      //1a. Proper value changes in row and column indexes that signify a win

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


