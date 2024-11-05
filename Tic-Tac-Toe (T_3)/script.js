const cells = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(e) {
    const index = e.target.getAttribute('data-index');
    
    // If cell already filled or game is over, return
    if (board[index] || !gameActive) return;
    
    // Update board state and cell text
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    
    // Check for winner or draw
    if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
        gameActive = false;
    } else if (!board.includes(null)) {
        alert('It\'s a draw!');
        gameActive = false;
    } else {
        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

