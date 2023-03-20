import React from 'react';

import './Cell.css';

export default function Cell(props) {
  function handleClick(e) {
    props.flipCellsAroundMe(props.val);
  }

  let classes = 'Cell' + (props.isLit ? ' Cell-lit' : ' Cell-unlit');
  return <td className={classes} onClick={handleClick}></td>;
}
