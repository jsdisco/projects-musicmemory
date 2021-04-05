import React from 'react';
import CardFront from './CardFront.js';

function Card({
    id,
    chord,
    mode,
    instrument,
    colClass,
    notation,
    handleCardClick,
    handleCardFrontClick,
    isFlipped,
    isFound
}) {
    return (
        <div className={isFound ? 'card flip found' : isFlipped ? 'card flip' : 'card'} id={id}>
            <div className="card-inner">
                <CardFront
                    chord={chord}
                    mode={mode}
                    instrument={instrument}
                    notation={notation}
                    colClass={colClass}
                    handleCardFrontClick={handleCardFrontClick}
                />
                <div className="card-back" onClick={() => handleCardClick(id, chord, mode, instrument)}></div>
            </div>
        </div>
    );
}

export default Card;
