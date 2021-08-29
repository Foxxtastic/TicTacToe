type AppBarItem = {
    text: string,
    link: string
}

export type AppBarType = Array<AppBarItem>

export type Cell = {
    col: number,
    row: number
}

export type Board = {
    boardSize: number,
    boardName: string,
    userCells: Array<Cell>,
    computerCells: Array<Cell>
}

export enum CellOwner {
    Empty,
    User,
    Computer
}

export type BoardCell = Cell & {
    index: number,
    owner: CellOwner
}

export type BoardCells = Array<BoardCell>