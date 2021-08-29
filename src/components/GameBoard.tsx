import { useState } from "react";
import { convertToBoardCells } from "../converters/convertToBoardCells"
import { Board, CellOwner } from "../types/types"
import { getRandom } from "../helpers/getRandom";
import { useEffect } from "react";

type GameBoardProps = {
    startBoard: Board
}

export function GameBoard({ startBoard }: GameBoardProps) {

    const [boardCells, setBoardCells] = useState(convertToBoardCells(startBoard));
    const [activePlayer, setActivePlayer] = useState(1);
    const [winner, setWinner] = useState<number | null>(null);
    // const userBoardCells = boardCells.filter(_ => _.owner === 1);
    // const computerBoardCells = boardCells.filter(_ => _.owner === 2);

    useEffect(() => {
        if (activePlayer === 2) {
            const freeBoardCells = boardCells.filter(_ => _.owner === 0);
            if (freeBoardCells.length === 0) {
                setWinner(2);
                return;
            }
            const randomfreeCellIndex = freeBoardCells[getRandom(freeBoardCells.length)].index;
            const newBoardCells = [...boardCells];
            const idx = newBoardCells.findIndex(_ => _.index === randomfreeCellIndex);
            if (idx === -1) {
                return;
            }
            newBoardCells[idx].owner = 2;
            setBoardCells(newBoardCells);
            setActivePlayer(1);
        }
    }, [activePlayer, boardCells])

    const style = {
        width: "250px",
        height: "250px",
        margin: "0 auto",
        display: "grid",
        gridTemplate: `repeat(${startBoard.boardSize}, 1fr) / repeat(${startBoard.boardSize}, 1fr)`
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

    const handleOnCellClick = (index: number) => {
        const newBoardCells = [...boardCells];
        newBoardCells[index].owner = 1;
        setBoardCells(newBoardCells);
        setActivePlayer(2);
    }

    return (
        <div>
            <div>{winner}</div>
            <div style={style}>
                {boardCells.map((x, idx) => {
                    const cell = getCellForShown(x.owner);
                    return (
                        <button
                            key={idx}
                            className="gamecell"
                            style={{ color: `${cell.color}` }}
                            disabled={cell.color !== null}
                            onClick={() => handleOnCellClick(idx)}
                        >
                            {cell.char}
                        </button>
                    )
                })}
            </div>
            <button>Save game</button>
        </div >
    )
}