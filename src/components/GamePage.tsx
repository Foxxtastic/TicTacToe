import { useState } from "react";
import { Board } from "../types/types";
import { GameBoard } from "./GameBoard";

type GamePageProps = {
    savedBoard?: Board
}

const newBoard: Board = {
    boardSize: 3,
    boardName: 'New Game',
    userCells: [{ col: 0, row: 0 }],
    computerCells: [{ col: 1, row: 0 }]
}

export function GamePage({ savedBoard }: GamePageProps) {

    const initialBoardState = savedBoard === undefined ? newBoard : savedBoard;
    const [board, setBoard] = useState(initialBoardState);

    return (
        <div className="gamepage">
            <GameBoard board={board} />
        </div>
    )
}