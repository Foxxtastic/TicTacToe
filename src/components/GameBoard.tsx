import { useState } from "react"
import { useBoardCreate } from "../hooks/useBoardCreate"
import { Board, BoardCell, BoardCells, Cell, CellOwner } from "../types/types"

type GameBoardProps = {
    board: Board
}

export function GameBoard({ board }: GameBoardProps) {

    const boardCells = useBoardCreate(board);

    const style = {
        width: "250px",
        height: "250px",
        margin: "0 auto",
        display: "grid",
        gridTemplate: `repeat(${board.boardSize}, 1fr) / repeat(${board.boardSize}, 1fr)`
    };

    const getCellForShown = (owner: CellOwner) => {
        switch (owner) {
            case CellOwner.Computer:
                return { char: "O", color: "red" };
            case CellOwner.User:
                return { char: "X", color: "blue" };
            case CellOwner.Empty:
                return { char: "", color: null };
        }
    }

    return (
        <div>
            <div style={style}>
                {boardCells.map((x, idx) => {
                    const cell = getCellForShown(x.owner);
                    return (
                        <button key={idx} style={{ color: `${cell.color}` }}>{cell.char}</button>
                    )
                })}
            </div>
            <button>Save game</button>
        </div>
    )
}