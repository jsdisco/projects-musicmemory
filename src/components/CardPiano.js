import React from 'react';
import { chordNotes } from '../utils/chordData.js';
import { pianoSVG } from '../utils/pianoSVGvals';

function CardPiano({ chord, chordName, notation }) {
    const [root, suffix] = chord.split('-');
    const notes = chordNotes[root][suffix].map(e => e.split('-')[0]);

    return (
        <div className="piano-card">
            <h4>{chordName}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                {pianoSVG.keysWhite.positions.map((x, i) => (
                    <rect
                        key={x}
                        x={x}
                        y={pianoSVG.keysWhite.y}
                        width={pianoSVG.keysWhite.width}
                        height={pianoSVG.keysWhite.height}
                        fill={notes.includes(pianoSVG.notesWhite[i]) ? '#fab' : '#fff'}
                        stroke="#000"
                        strokeWidth="3"
                    />
                ))}
                {pianoSVG.keysBlack.positions.map((x, i) => (
                    <rect
                        key={x}
                        x={x}
                        y={pianoSVG.keysBlack.y}
                        width={pianoSVG.keysBlack.width}
                        height={pianoSVG.keysBlack.height}
                        fill={notes.includes(pianoSVG.notesBlackSharp[i]) ? '#701' : '#000'}
                        stroke="#000"
                        strokeWidth="3"
                    />
                ))}

                <rect x="366" y="150" width="20" height="110" />

                {pianoSVG.textWhite.map((val, i) => (
                    <text key={i} transform={`translate(${val})`} fontSize="24px">
                        {pianoSVG.notesWhite[i]}
                    </text>
                ))}

                {notation === 'sharps' &&
                    pianoSVG.textSharp.map((val, i) => (
                        <text key={i} transform={`translate(${val})`} fill="#fff" fontSize="24px">
                            {pianoSVG.notesBlackSharp[i]}
                        </text>
                    ))}

                {notation === 'flats' &&
                    pianoSVG.textFlat.map((val, i) => (
                        <text key={i} transform={`translate(${val})`} fill="#fff" fontSize="24px">
                            {pianoSVG.notesBlackFlat[i]}
                        </text>
                    ))}

                <rect width="400" height="400" fill="none" />
            </svg>
        </div>
    );
}

export default CardPiano;
