import React from 'react';
import fretboardBG from '../assets/fretboardBG.svg';
import { fretPos } from '../utils/chordData.js';
import { fretboardSVG } from '../utils/fretboardSVGvals.js';

function CardFretboard({ chord, chordName }) {
    const [root, suffix] = chord.split('-');
    const fretsArr = fretPos[root][suffix];
    return (
        <div className="fretboard" style={{ backgroundImage: `url(${fretboardBG})` }}>
            <h4>{chordName}</h4>
            <svg className="fretmarkers" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                {fretsArr.map((fret, i) => {
                    const isMuted = fret === -1;
                    const isOpen = fret === 0;

                    return (
                        <g key={fretboardSVG.cy[i]}>
                            <circle
                                cx={isOpen || isMuted ? fretboardSVG.cxArr[0] : fretboardSVG.cxArr[fret]}
                                cy={fretboardSVG.cy[i]}
                                r="9"
                                fill="#fff"
                                fillOpacity={isOpen || isMuted ? '0.3' : '0.6'}
                                stroke="#fff"
                                strokeWidth="1"
                            />
                            {isMuted && (
                                <text
                                    className="muted"
                                    x={fretboardSVG.cxArr[0] - 10}
                                    y={fretboardSVG.cy[i] + 8}
                                    fill="#b00"
                                    fontSize="28px"
                                    fontWeight="bold"
                                >
                                    x
                                </text>
                            )}
                        </g>
                    );
                })}
                <rect width="400" height="400" fill="none" />
            </svg>
        </div>
    );
}

export default CardFretboard;
