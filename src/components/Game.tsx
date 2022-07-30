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

    return (
        <div>

            <div className='grid grid-cols-3 gap-2'>
                {!gameOver && board.map((cell, idx) => (
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