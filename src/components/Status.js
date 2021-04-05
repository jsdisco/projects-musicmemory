import React from 'react';

function Status({ thisMoves, allMoves, updateSettings }) {
    const best = allMoves.length > 0 && Math.min(...allMoves);
    return (
        <div className="status">
            <div className="score">
                {best && <p>Best: {best} moves</p>}
                {thisMoves && <p>Moves: {thisMoves}</p>}
            </div>
            <div className={thisMoves ? 'status-btns slide-in' : 'status-btns'}>
                <button type="button" name="newGame" className="btn btn-red btn-pulse" onClick={updateSettings}>
                    new game
                </button>
                <button type="button" name="sort" className="btn btn-red btn-pulse" onClick={updateSettings}>
                    sort
                </button>
            </div>
        </div>
    );
}

export default Status;
