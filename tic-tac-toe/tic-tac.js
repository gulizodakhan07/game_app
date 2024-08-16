// Hali toliq emas!!!



const cells = document.querySelectorAll('.cell')
const statusBtn = document.querySelector('#statusText')
const restartBtn = document.querySelector('#restartBtn')

const conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let options = ""
const currentPlayer = "X"
let running = false

initilizeGame()
function initilizeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    restartBtn.addEventListener("click",restartGame)
    statusText.texContent = `${currentPlayer}'s turn`
    


}
function cellClicked(){

}
function updateCell (cell,indedx){

}
function checkWinner(){

}
function  restartGame(){

}