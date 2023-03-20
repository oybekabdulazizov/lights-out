import React, { Fragment } from 'react';

import './Board.css';

import useBoardState from './hooks/useBoardState';

export default function Board() {
  const [state, createTblBoard] = useBoardState();

  return (
    <Fragment>
      {state.hasWon ? (
        <div className='Board-winner'>
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
          </div>
        </div>
      ) : (
        <div>
          <div className='neon-orange'>Lights</div>
          <div className='neon-blue'>Out</div>
          <table className='Board'>
            <tbody>{createTblBoard()}</tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
}
