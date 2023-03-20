import { useState } from 'react';

import Cell from '../Cell';

export default function useBoardState() {
  const boardProps = {
    nrows: 5,
    ncols: 6,
    chanceLightStarsOn: 0.3,
  };

  const createBoard = () => {
    const newBoard = [];
    for (let y = 0; y < boardProps.nrows; y++) {
      let row = [];
      for (let x = 0; x < boardProps.ncols; x++) {
        row.push(Math.random() < boardProps.chanceLightStarsOn);
      }
      newBoard.push(row);
    }

    return newBoard;
  };

  const [state, setState] = useState({ hasWon: false, board: createBoard() });

  function createTblBoard() {
    let tblBoard = [];
    for (let y = 0; y < boardProps.nrows; y++) {
      let row = [];
      for (let x = 0; x < boardProps.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            val={coord}
            isLit={state.board[y][x]}
            flipCellsAroundMe={flipCellsAround}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return tblBoard;
  }

  function flipCellsAround(coord) {
    let { nrows, ncols } = boardProps;
    let board = state.board;

    let [y, x] = coord.split('-');
    y = parseInt(y);
    x = parseInt(x);

    function flipCell(y, x) {
      if (y >= 0 && y < nrows && x >= 0 && x < ncols) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y + 1, x);
    setState((prevState) => ({
      ...prevState,
      board,
    }));

    let falseValCounter = 0;
    for (let y = 0; y < nrows; y++) {
      for (let x = 0; x < ncols; x++) {
        if (board[y][x] === false) {
          falseValCounter++;
        }
      }
    }

    setState((prevState) => ({
      ...prevState,
      hasWon: falseValCounter === nrows * ncols ? true : false,
    }));
  }

  return [state, createTblBoard];
}
