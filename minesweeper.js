document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
 cells: [
 	 {
     hidden: true,
     isMine: true,
     row: 0,
     col: 0
	 },
     {
     hidden: true,
     isMine: true,
      row: 0,
      col: 1
	 },
     {
     hidden: true,
     isMine: true, 
      row: 1,
      col: 0
	 },
     {
     hidden: true,
     isMine: false,
      row: 1,
      col: 1
	 }, 
  
 ]
 }



function startGame  () {
 
 for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
      var count = countSurroundingMines(cell)
      cell.surroundingMines = count
        
 }


  lib.initBoard()
}

// Define this function to look for a win condition:
//

// 2. Are all of the mines marked?
function checkForWin () { 

    var didWin = true

    for (var i = 0; i < board.cells.length; i++) {
        var cell = board.cells[i]
        console.log(cell)
            if (cell.isMine && cell.isMarked == false){
                 didWin = false     
			}
        } 
        if (didWin == true){
            lib.displayMessage('MY NAZI!')
            }
}

document.addEventListener("click",checkForWin)

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col) 
  for (var i = 0; i < surrounding.length; i++) {
      var currentCell = surrounding[i]
        if (currentCell.isMine){
          count++       
		}
  } return count
}

