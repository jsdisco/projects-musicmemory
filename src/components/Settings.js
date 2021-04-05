import React from 'react';
import CardPreview from './CardPreview.js';

function Settings({ settings, updateSettings, handleClose }) {
    const suffixOrder = ['major', 'minor', '7', 'm7', 'maj7', 'sus4', 'aug', 'dim', 'dim7'];
    const [mode1, mode2] = [
        Object.entries(settings.match1).filter(([mode, bool]) => bool)[0][0],
        Object.entries(settings.match2).filter(([mode, bool]) => bool)[0][0]
    ];
    const lineCoords = { chordName: 47, frets: 149, rootNote: 251, piano: 353 };

    return (
        <div className="settings">
            <div className="close-settings">
                <button name="close" onClick={handleClose}>
                    x
                </button>
            </div>
            <div className="settings-grid">
                <div className="match">
                    <h2>match</h2>
                    <div className="match-grid">
                        <p>chord name</p>
                        <p>frets</p>
                        <p>root note</p>
                        <p>piano</p>
                        {Object.entries(settings.match1).map(([value, isChecked]) => (
                            <CardPreview
                                key={value}
                                name="match1"
                                value={value}
                                notation={settings.notation.sharps ? 'sharps' : 'flats'}
                                isChecked={isChecked}
                                updateSettings={updateSettings}
                            />
                        ))}
                        <div className="match-card-line">
                            <svg id="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 40" width="100%">
                                <line
                                    x1={lineCoords[mode1]}
                                    y1="0"
                                    x2={lineCoords[mode2]}
                                    y2="40"
                                    stroke="#999"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {Object.entries(settings.match2).map(([value, isChecked]) => (
                            <CardPreview
                                key={value}
                                name="match2"
                                value={value}
                                notation={settings.notation.sharps ? 'sharps' : 'flats'}
                                isChecked={isChecked}
                                updateSettings={updateSettings}
                            />
                        ))}
                    </div>
                </div>
                <div className="chords">
                    <h2>chords</h2>
                    <div className="flex-wrap">
                        {suffixOrder.map(value => {
                            const isChecked = settings.chords[value];
                            return (
                                <label key={value} className="label-btn">
                                    <input
                                        type="checkbox"
                                        name="chords"
                                        value={value}
                                        checked={isChecked}
                                        onChange={updateSettings}
                                    />
                                    <span>{value}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className="notation">
                    <h2>notation</h2>
                    <div className="flex-wrap">
                        {Object.entries(settings.notation).map(([value, isChecked]) => {
                            return (
                                <label key={value} className="label-btn">
                                    <input
                                        type="radio"
                                        name="notation"
                                        value={value}
                                        checked={isChecked}
                                        onChange={updateSettings}
                                    />
                                    <span>{value}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className="colour-guide">
                    <h2>colour guide</h2>
                    <div className="flex-wrap">
                        {Object.entries(settings.colourGuide).map(([value, isChecked]) => {
                            return (
                                <label key={value} className="label-btn">
                                    <input
                                        type="radio"
                                        name="colourGuide"
                                        value={value}
                                        checked={isChecked}
                                        onChange={updateSettings}
                                    />
                                    <span>{value}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className="settings-btns">
                    <button type="button" name="newGame" className="btn btn-red btn-pulse" onClick={handleClose}>
                        new game
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
