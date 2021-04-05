import React, { useEffect, useRef, useCallback } from 'react';
import MIDISounds from 'midi-sounds-react';
import { noteToMidiKey } from '../utils/noteToMidiKey.js';

function Sounds({ currVolume, currSoundData }) {
    const midiSounds = useRef(null);

    const setVolume = v => midiSounds.current && midiSounds.current.setMasterVolume(v / 100);

    const playNoteCallback = useCallback((mk, instr) => {
        const playNote = (midiKey, instrumentKey) => midiSounds.current.playChordNow(instrumentKey, [midiKey], 2);
        playNote(mk, instr);
    }, []);

    useEffect(() => {
        if (currSoundData) {
            currSoundData.notesOctaves.forEach(noteOctave => {
                const [note, octave] = noteOctave.split('-');
                const instrKey = currSoundData.instrument === 'piano' ? 3 : 259;
                const midiKey = noteToMidiKey(note, +octave);
                playNoteCallback(midiKey, instrKey);
            });
        }
    }, [playNoteCallback, currSoundData]);

    useEffect(() => {
        setVolume(currVolume);
    }, [currVolume]);

    return (
        <div className="midi">
            <MIDISounds
                ref={ref => {
                    midiSounds.current = ref;
                    setVolume(currVolume);
                }}
                instruments={[3, 259]}
            />
        </div>
    );
}

export default Sounds;
