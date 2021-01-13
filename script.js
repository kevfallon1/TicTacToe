const board = (() => {
    let board = new Array(9);
    for(let i=0; i<board.length; i++) {
        board[i] = "_";
    }

    const checkVerticals = (player) => {
        for(let i=0; i<3; i++) {
            if(board[i] == player && board[i+3] == player && board[i+6]== player) {
                return true;
            }

        }
        return false;
    }

    const checkHorizontals = (player) => {
        if(board[0] == player && board[1] == player && board[2] == player) {
            return true;
        }

        if(board[3] == player && board[4] == player && board[5] == player) {
            return true;
        }

        if(board[6] == player && board[7] == player && board[8] == player) {
            return true;
        }
        return false;
    }

    const checkDiagonals = (player) => {
        if(board[0] == player && board[4] == player && board[8] == player) {
            return true;
        }
        if(board[6] == player && board[4] == player && board[2] == player) {
            return true;
        }
        return false;
    }

    const checkWin = (player) => {
        return checkDiagonals(player) || checkHorizontals(player) || checkVerticals(player);
    }

    const checkGameOver = () => {
        for(let k=0; k<board.length; k++) {
            if(board[k] == "_") {
                return false; 
            }
        }
        return true;
    }

    return {board, checkWin, checkGameOver}
})();

var currentPlayer = 'X';


const gameContainer = document.getElementById('gameContainer');
console.log(board.board.length);
for(let j = 0; j<board.board.length; j++) {
    let currentCell = document.createElement('div');
    let currentText = document.createElement('span');

    currentText.textContent = board.board[j];

    currentText.classList.add('cellText');
    currentCell.classList.add('gameCell');
    currentCell.id = j;

    currentCell.addEventListener('click', makeMove);

    currentCell.appendChild(currentText);
    gameContainer.appendChild(currentCell);
}

function makeMove() {
    board.board[this.id] = currentPlayer;
    this.childNodes[0].textContent = currentPlayer;
    if(currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
    if(board.checkWin('X')) {
        return alert('X wins!');
    } else if(board.checkWin('O')) {
        return alert('O wins!');
    } else if(board.checkGameOver()) {
        return alert("It's a tie!")
    }
    

}