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
                row.push(<Cell key={coord} isLit={this.state.board[y][x]} />)
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
        
        return tblBoard;
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