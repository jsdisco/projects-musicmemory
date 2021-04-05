import React from 'react';
import { sheetSVG } from '../utils/sheetSVGvals.js';

function CardSheet({ chordName }) {
    const [key, accidental] = chordName.split(' ')[0].split('');

    const notePath = sheetSVG[key];
    let accPath;
    if (accidental) {
        accPath = sheetSVG[`${key}${accidental}`];
    }

    return (
        <div className="sheetCard">
            <h4>{chordName}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                <rect x="14" y="150" width="372" height="180" fill="#fff" />
                <path d={notePath} />
                {accidental && <path d={accPath} />}
                {chordName[0] === 'C' && (
                    <line
                        className="c-line"
                        x1="200"
                        y1="305.5"
                        x2="250"
                        y2="305.5"
                        fill="none"
                        stroke="#000"
                        strokeWidth="5"
                    />
                )}
                <g>
                    <line x1="36.5" y1="180" x2="363.5" y2="180" fill="none" stroke="#000" strokeWidth="5" />
                    <line x1="36.5" y1="205" x2="363.5" y2="205" fill="none" stroke="#000" strokeWidth="5" />
                    <line x1="36.5" y1="230" x2="363.5" y2="230" fill="none" stroke="#000" strokeWidth="5" />
                    <line x1="36.5" y1="255" x2="363.5" y2="255" fill="none" stroke="#000" strokeWidth="5" />
                    <line x1="36.5" y1="280" x2="363.5" y2="280" fill="none" stroke="#000" strokeWidth="5" />
                    <path d="M115,255.07c0-10.58-7.83-24.32-26-21.26-.73-3-3.43-15.32-3.43-15.32,11.71-11.89,26.9-28.11,8-57.14-2.1-3-5.49-.55-6.19-.12-10.34,6.49-14.47,28.39-8.1,45.37-8.55,6.52-20.56,20-23.44,24.51s-6.28,16.08-1.61,26.3,15.86,21.41,30.78,20.89a46.68,46.68,0,0,0,10.2-1.39c2.21,8.61,4,15.71,4,15.71,1.24,6.28.73,16.53-14.74,18.2-7.09.53-9-3.65-9-3.68h0c6.61-.09,10.49-3.31,10.89-8.49s-5.4-8.4-9.43-8.44-10.56,3-10.53,9.65,7,15.2,17.93,14.1,17-5.12,18.35-16.22a19.79,19.79,0,0,0,0-4.1l-4-17.95C108.66,271.39,115,264.47,115,255.07ZM88.93,173.86c7.7-4.85,10.68,3.58,8,11.22S92,196.37,82.59,204.77C78.62,193.7,81.23,178.71,88.93,173.86ZM59.6,254c-.45-17.53,23.17-33.09,23.17-33.09s2.1,9.92,2.89,13.56c.06.06-6.74.79-12.23,10.31s2.25,17.41,3.85,19a19.07,19.07,0,0,0,7.31,4.13,1.32,1.32,0,0,0,1.1-2c-5.13-1.82-8.28-5.88-8.47-9.67S81,246.41,88,244.47l6.86,29.21C77.53,278.87,60.06,268.25,59.6,254Zm38.31,18.69-6.67-28.63c10.52-.09,15.13,6.27,16.4,12S106.37,268.71,97.91,272.68Z" />
                    <line x1="40" y1="178" x2="40" y2="282" fill="none" stroke="#000" strokeWidth="7" />
                </g>
                <rect width="400" height="400" fill="none" />
            </svg>
        </div>
    );
}

export default CardSheet;
