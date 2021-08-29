import { Board, BoardCell, CellOwner } from "../types/types"

export const updateBoard = (board: Board, cellForUpdate: BoardCell): Board => {
    const newBoard = board;

    if (cellForUpdate.owner === CellOwner.Computer) {
        newBoard.computerCells = [...newBoard.computerCells, { col: cellForUpdate.col, row: cellForUpdate.row }];
    } else {
        newBoard.userCells = [...newBoard.computerCells, { col: cellForUpdate.col, row: cellForUpdate.row }];
    }

    return newBoard;
}