import React from 'react';
import CardFretboard from './CardFretboard.js';
import CardPiano from './CardPiano.js';
import CardSheet from './CardSheet.js';

function CardFront({ chord, mode, instrument, notation, colClass, handleCardFrontClick }) {
    const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const notesFlat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    const [note, suffix] = chord.split('-');
    const noteName = notation === 'sharps' ? note : notesFlat[notesSharp.indexOf(note)];
    const chordName = `${noteName} ${suffix}`;

    return (
        <div className={`card-front ${colClass}`} onClick={() => handleCardFrontClick(chord, mode, instrument)}>
            {mode === 'chordName' ? (
                <h4 className="chord-big">{chordName}</h4>
            ) : mode === 'frets' ? (
                <CardFretboard chord={chord} chordName={chordName} />
            ) : mode === 'rootNote' ? (
                <CardSheet chordName={chordName} />
            ) : (
                <CardPiano chord={chord} chordName={chordName} notation={notation} />
            )}
        </div>
    );
}

export default CardFront;
