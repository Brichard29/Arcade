/* requirements

initial state:
-empty 3x3 board
-reset button
-message(ex. Player X's turn!)


playing state:
-click on square to insert X / O
-If player gets 3 in a row vertically, horizontally, or diagonally; 
player wins.
-Winning / losing message (ex. Player X wins!!)
-Draw message if neither player wins
-After each turn:
    -check for win
    -check for draw
    -switch turns



*/

options = ['X', 'O'];
currentPlayer = 'X';
const main = document.querySelector("main");
const btnEle = document.querySelector(".reset");

function reset() {
    const cellEls = document.querySelectorAll('.cell');
    cellEls.forEach(ele => {
        ele.innerHTML = '';
    });
}

btnEle.addEventListener('click', reset);
main.addEventListener('click', function(e){
    const target = e.target;
    if(target.innerHTML) {
        return;
    }
    target.innerHTML = currentPlayer;
    if(currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X'
    }
    validateBoard();
});

function validateBoard() {
    const [b1,b2,b3,b4,b5,b6,b7,b8,b9] = document.querySelectorAll('.cell');
    let isWin = false, player = null;
    options.forEach(opt => {
        if(isWin) return;
        if(
            (b1.innerHTML === opt && b2.innerHTML === opt && b3.innerHTML === opt)
            || (b4.innerHTML === opt && b5.innerHTML === opt && b6.innerHTML === opt)
            || (b7.innerHTML === opt && b8.innerHTML === opt && b9.innerHTML === opt)
            || (b1.innerHTML === opt && b4.innerHTML === opt && b7.innerHTML === opt)
            || (b2.innerHTML === opt && b5.innerHTML === opt && b8.innerHTML === opt)
            || (b3.innerHTML === opt && b6.innerHTML === opt && b9.innerHTML === opt)
            || (b1.innerHTML === opt && b5.innerHTML === opt && b9.innerHTML === opt)
            || (b3.innerHTML === opt && b5.innerHTML === opt && b7.innerHTML === opt)
        ){
            isWin = true;
            player = opt;
        }
    });
    if(isWin) {
        setTimeout(function() {
            alert(`Player ${player} wins!!`);
            reset();
        }, 0);
    } 
}

