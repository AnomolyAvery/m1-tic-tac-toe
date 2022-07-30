import classNames from '@/utils/classNames';
import React from 'react'

const Game: React.FC = () => {

    type Board = Array<'X' | 'O' | ''>;

    const initialBoard: Board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    const [gameOver, updateGameOver] = React.useState(false);

    const [board, updateBoard] = React.useState(initialBoard);

    type Player = 'X' | 'O';

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


    return (
        <div>

            <h2
                className={classNames("text-3xl font-bold mb-4", turn === 'X' ? 'text-blue-500' : 'text-red-500')}
            >
                {turn}&apos;s Turn
            </h2>
            <div className='grid grid-cols-3 gap-2'>
                {!gameOver && turn && board.map((cell, idx) => (
                    <BoardCell key={`board-cell-${idx}`} />
                ))}
            </div>
        </div>
    )
}

type BoardCellProps = {

}

const BoardCell = (props: BoardCellProps) => {

    return (
        <div className='bg-blue-500 h-20'>

        </div>
    )
};

export default Game