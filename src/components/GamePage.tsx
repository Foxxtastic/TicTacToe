import { useState } from "react";
import { Board } from "../types/types";
import { GameBoard } from "./GameBoard";

type GamePageProps = {
    savedBoard?: Board
}

const newBoard: Board = {
    boardSize: 3,
    boardName: 'New Game',
    userCells: [],
    computerCells: []
}

export function GamePage({ savedBoard }: GamePageProps) {

    const initialBoardState = savedBoard === undefined ? newBoard : savedBoard;
    const [board, setBoard] = useState(initialBoardState);

    return (
        <div className="gamepage">
            <GameBoard startBoard={board} />
        </div>
    )
}