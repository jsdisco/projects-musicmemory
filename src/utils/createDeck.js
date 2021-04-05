const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const suffixes = ['major', 'minor', '7', 'm7', 'maj7', 'sus4', 'aug', 'dim', 'dim7'];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function deckToCardObj(chords, pairId, settings) {
    return chords.map((chord, i) => {
        const mode = Object.entries(settings[`match${pairId}`]).filter(([mode, bool]) => bool)[0][0];
        const instrument = mode === 'rootNote' || mode === 'piano' ? 'piano' : 'guitar';
        const colClass = settings.colourGuide.on ? `col${i}` : 'noCol';
        const [root, suffix] = chord.split('-');
        const rootIndex = notes.indexOf(root) + 10;
        const suffixIndex = suffixes.indexOf(suffix);
        const sortIndex = `${rootIndex}${suffixIndex}${pairId}`;

        return { chord, mode, pairId, instrument, colClass, sortIndex };
    });
}

function createDeck(settings) {
    let deck;
    const suffixes = Object.entries(settings.chords)
        .filter(([suffix, bool]) => bool)
        .map(([suffix, bool]) => suffix);
    const isWithRoot = settings.match1.rootNote || settings.match2.rootNote;

    if (isWithRoot) {
        deck = shuffle([...notes])
            .slice(0, 8)
            .map(randomNote => {
                const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
                const chord = `${randomNote}-${randomSuffix}`;
                return chord;
            });
    } else {
        deck = [];
        while (deck.length < 8) {
            const randomNote = notes[Math.floor(Math.random() * 12)];
            const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
            const chord = `${randomNote}-${randomSuffix}`;
            if (!deck.includes(chord)) {
                deck.push(chord);
            }
        }
    }
    deck = [...deckToCardObj(deck, 1, settings), ...deckToCardObj(deck, 2, settings)];
    shuffle(deck);

    return deck;
}

export default createDeck;
