import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    static defaultProps = {
        nrows: 5, 
        ncols: 6, 
        chanceLightStarsOn: 0.5
    }

    constructor(props) {
        super(props);
        this.state = {
            hasWon: false, 
            board: []
        }
    }

    render() {
        return (
            <div className="Board"><h1>I am a Board component 😎</h1></div>
        )
    }
}

export default Board;