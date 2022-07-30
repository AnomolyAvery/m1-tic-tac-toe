import classNames from '@/utils/classNames';
import React from 'react'

type Square = 'X' | 'O' | '';

type Board = Array<Square>;

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
    value: Square;
}

const BoardCell = (props: BoardCellProps) => {

    return (
        <div onClick={props.onClick} className='bg-blue-500 h-20'>
            {props.value}
        </div>
    )
};

export default Game