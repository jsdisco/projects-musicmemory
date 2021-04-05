function noteToMidiKey(note, octave) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    return +octave * 12 + notes.indexOf(note);
}

export { noteToMidiKey };
