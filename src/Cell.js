import './Cell.css';
import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("handling a simple click for now...");
    }

    render() {
        let classes = "Cell" + (this.props.isLit ? " Cell-lit" : " Cell-unlit");
        return (
            <td className={classes} onClick={this.handleClick}>I am a Cell component 😃</td>
        )
    }
}

export default Cell;