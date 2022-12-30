import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component {
    static defaultProps = {
        nrows: 5, 
        ncols: 6, 
        chanceLightStarsOn: 0.3
    }

    constructor(props) {
        super(props);
        this.state = {
            hasWon: false, 
            board: this.createBoard()
        }
        this.flipCellsAround = this.flipCellsAround.bind(this);
    }

    createBoard() {
        const newBoard = [];
        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStarsOn);
            }
            newBoard.push(row);
        }
        
        return newBoard;
    }

    createTblBoard() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(<Cell key={coord} val={coord} isLit={this.state.board[y][x]} flipCellsAroundMe={this.flipCellsAround} />)
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
        return tblBoard;
    }

    flipCellsAround(coord) {
        let { nrows, ncols } = this.props;
        let board = this.state.board;

        let [y, x] = coord.split("-");
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
        this.setState(currState => ({
            board
        }));

        let falseValCounter = 0
        for (let y = 0; y < nrows; y++) {
            for (let x = 0; x < ncols; x++) {
                if (board[y][x] === false) {
                    falseValCounter++;
                }
            }
        }

        if (falseValCounter === (nrows * ncols)) {
            this.setState(currState => ({
                hasWon: true
            }))
        }
    }

    printBoard = () => {
        for (let row of this.state.board) {
            console.log(row);
        }
    }

    render() {
        return (
            <table className="Board">
                <tbody>
                    {this.createTblBoard()}
                </tbody>
            </table>
        )
    }
}

export default Board;