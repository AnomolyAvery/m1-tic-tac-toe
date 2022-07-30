import classNames from '@/utils/classNames';
import React from 'react'

type Cell = 'X' | 'O' | '';

type Board = Array<Cell>;

type Player = 'X' | 'O';

const Game: React.FC = () => {

    const initialBoard: Board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    const [gameOver, updateGameOver] = React.useState(false);

    const [board, updateBoard] = React.useState(initialBoard);

    const [turn, updateTurn] = React.useState<Player | null>(null);

    const [winner, updateWinner] = React.useState<Player | null>(null);

    const onResetClick = () => {
        updateBoard(initialBoard);
        updateTurn(null);
        updateGameOver(false);
    };

    if (gameOver) {
        return (
            <div>
                <h1
                    className='text-3xl font-bold mb-4'
                >Game Over</h1>

                <h3
                    className='text-2xl font-bold mb-4'
                >
                    {winner ? `${winner} wins!` : 'Draw!'}
                </h3>

                <button onClick={onResetClick}>
                    Reset
                </button>
            </div>
        )
    }

    const onTurnClick = () => {
        if (turn === null) {
            const options: Player[] = ['X', 'O'];

            const randomIndex = Math.floor(Math.random() * options.length);

            updateTurn(options[randomIndex]);
        }
    };

    if (turn === null) {
        return (
            <div>
                <button onClick={onTurnClick}>
                    Randomize Turn
                </button>
            </div>
        )
    }

    const getWinner = (): Player | null => {
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

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {

                const cell = board[a];

                if (cell === 'X') {
                    return 'X';
                }

                if (cell === 'O') {
                    return 'O';
                }

                return null;
            }
        }

        return null;
    };


    const onCellClick = (cellIdx: number) => {
        if (gameOver) {
            return;
        }

        if (board[cellIdx] !== '') {
            return;
        }

        const newBoard = [...board];

        newBoard[cellIdx] = turn;

        updateBoard(newBoard);

        const winner = getWinner();
        console.log('Winner', winner);

        if (winner !== null) {
            updateWinner(winner);
            updateGameOver(true);
            return;
        }

        const emptyCells = newBoard.filter(cell => cell === '');

        if (emptyCells.length === 0) {
            updateGameOver(true);
            return;
        }

        const newTurn = turn === 'X' ? 'O' : 'X';

        updateTurn(newTurn);


    };


    return (
        <div>

            <h2
                className={classNames("text-3xl font-bold mb-4", turn === 'X' ? 'text-blue-500' : 'text-red-500')}
            >
                {turn}&apos;s Turn
            </h2>
            <div className='grid grid-cols-3 gap-2'>
                {!gameOver && turn && board.map((cell, idx) => (
                    <BoardCell key={`board-cell-${idx}`} value={board[idx]} onClick={() => onCellClick(idx)} />
                ))}
            </div>
        </div>
    )
}

type BoardCellProps = {
    onClick: () => void;
    value: Cell;
}

const BoardCell = (props: BoardCellProps) => {

    return (
        <div onClick={props.onClick} className='bg-blue-500 h-20'>
            {props.value}
        </div>
    )
};

export default Game