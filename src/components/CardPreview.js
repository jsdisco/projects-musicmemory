import React from 'react';
import CardFretboard from './CardFretboard.js';
import CardPiano from './CardPiano.js';
import CardSheet from './CardSheet.js';

function CardPreview({ name, value, notation, isChecked, updateSettings }) {
    const note = 'E';
    const chord = 'E-major';
    const chordName = 'E major';

    return (
        <label key={value} className={isChecked ? 'match-label active' : 'match-label'}>
            {value === 'chordName' ? (
                <h4 className="chord-big">{chordName}</h4>
            ) : value === 'frets' ? (
                <CardFretboard chord={chord} chordName={chordName} />
            ) : value === 'rootNote' ? (
                <CardSheet note={note} chordName={chordName} />
            ) : (
                <CardPiano chord={chord} chordName={chordName} notation={notation} />
            )}
            <input type="radio" name={name} value={value} checked={isChecked} onChange={updateSettings} />
        </label>
    );
}

export default CardPreview;
