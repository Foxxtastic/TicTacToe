import { Board, BoardCell, BoardCells, CellOwner } from "../types/types";

export const convertToBoardCells = (board: Board) => {

    const result: BoardCells = [];

    for (let col = 0; col < board.boardSize; col++) {
        for (let row = 0; row < board.boardSize; row++) {
            const cell: BoardCell = board.computerCells.find(_ => _.col === col && _.row === row) ?
                {
                    index: row * 10 + col,
                    col,
                    row,
                    owner: CellOwner.Computer
                } :
                board.userCells.find(_ => _.col === col && _.row === row) ?
                    {
                        index: row * 10 + col,
                        col,
                        row,
                        owner: CellOwner.User
                    } :
                    {
                        index: row * 10 + col,
                        col,
                        row,
                        owner: CellOwner.Empty
                    }
            result.push(cell);
        }
    }
    return result;
}