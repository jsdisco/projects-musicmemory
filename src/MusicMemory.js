import React, { useState } from 'react';
import Header from './components/Header.js';
import Status from './components/Status.js';
import Game from './components/Game.js';
import './css/musicmemory.css';

function MusicMemory() {
    const initialSettings = {
        match1: { chordName: false, frets: true, rootNote: false, piano: false },
        match2: { chordName: false, frets: false, rootNote: false, piano: true },
        chords: {
            major: true,
            minor: true,
            7: true,
            m7: false,
            maj7: false,
            sus4: true,
            dim: false,
            dim7: false,
            aug: false
        },
        notation: { sharps: true, flats: false },
        colourGuide: { off: false, on: true },
        currVolume: 30
    };
    const [settings, setSettings] = useState(initialSettings);
    const [isRunning, setIsRunning] = useState(true);
    const [isSort, setIsSort] = useState(false);
    const [thisMoves, setThisMoves] = useState(null);
    const [allMoves, setAllMoves] = useState([]);

    function updateSettings(e) {
        if (e.target.closest('.icon-volume')) {
            const newVolume = settings.currVolume === 0 ? 30 : 0;
            setSettings(prev => ({ ...prev, currVolume: newVolume }));
            return;
        }
        if (e.target.name === 'sort') {
            setIsSort(true);
            return;
        }
        if (e.target.name === 'close') {
            setIsRunning(true);
            return;
        }
        if (e.target.name === 'newGame') {
            setIsRunning(true);
            setSettings(prev => ({ ...prev }));
            setThisMoves(null);
            setIsSort(false);
            return;
        }
        setIsRunning(false);
        setIsSort(false);
        const newSettings = { ...settings };
        const key = e.target.name;
        const field = e.target.value;

        if (key.startsWith('match') || key === 'notation' || key === 'colourGuide') {
            // radio buttons
            for (const fieldName in newSettings[key]) {
                newSettings[key][fieldName] = field === fieldName;
            }
        } else if (key === 'chords') {
            // checkboxes
            newSettings[key][field] = !newSettings[key][field];
        }
        setThisMoves(null);
        setSettings(newSettings);
    }

    function updateMoves(moves) {
        setThisMoves(moves);
        setAllMoves(prev => [...prev, moves]);
    }
    const todo = [];
    return (
        <div className="music-memory">
            <Header settings={settings} updateSettings={updateSettings} />
            <Status thisMoves={thisMoves} allMoves={allMoves} updateSettings={updateSettings} />
            <Game settings={settings} isRunning={isRunning} isSort={isSort} updateMoves={updateMoves} />
        </div>
    );
}

export default MusicMemory;
