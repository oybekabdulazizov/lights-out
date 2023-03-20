import React, { Component } from 'react';

import './Cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.flipCellsAroundMe(this.props.val);
  }

  render() {
    let classes = 'Cell' + (this.props.isLit ? ' Cell-lit' : ' Cell-unlit');
    return <td className={classes} onClick={this.handleClick}></td>;
  }
}

export default Cell;
