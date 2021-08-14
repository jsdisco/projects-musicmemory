import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { chordNotes } from '../utils/chordData.js';
import createDeck from '../utils/createDeck.js';
import Sounds from './Sounds.js';

function Game({ settings, isRunning, isSort, updateMoves, volume }) {
    const [flippedCards, setFlippedCards] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const [currSoundData, setCurrSoundData] = useState(null);
    const [currMoves, setCurrMoves] = useState(null);

    const [deck, setDeck] = useState(null);

    useEffect(() => {
        setFlippedCards([]);
        setFoundCards([]);
        setCurrSoundData(null);
        setCurrMoves(null);
        if (isRunning) {
            setDeck(createDeck(settings));
        }
    }, [settings, isRunning]);

    useEffect(() => {
        if (isSort) {
            setTimeout(() => {
                setDeck(prev => [...prev].sort((a, b) => a.sortIndex - b.sortIndex));
            }, 200);
        }
    }, [isSort]);

    function handleCardClick(id, chord, mode, instrument) {
        // visuals and game logic
        if (flippedCards.length === 0 || flippedCards.length === 2) {
            setFlippedCards([id]);
        } else if (flippedCards.length === 1) {
            if (flippedCards[0].split('_')[0] === chord) {
                if (foundCards.length === 7) {
                    updateMoves(currMoves);
                }
                setFoundCards(prev => [...prev, chord]);
            }
            setFlippedCards(prev => [...prev, id]);
        }
        setCurrMoves(prev => prev + 1);
        playSound(chord, mode, instrument);
    }

    function handleCardFrontClick(chord, mode, instrument) {
        playSound(chord, mode, instrument);
    }

    function playSound(chord, mode, instrument) {
        const [root, suffix] = chord.split('-');
        const notesOctaves = mode === 'rootNote' ? [`${root}-3`] : chordNotes[root][suffix];

        const newSoundData = {
            instrument,
            notesOctaves
        };
        setCurrSoundData(newSoundData);
    }

    return (
        <div className="wrapper">
            <Sounds volume={volume} currSoundData={currSoundData} />
            <div className={isSort ? 'game sort' : 'game'}>
                {deck &&
                    deck.map(card => {
                        const id = `${card.chord}_${card.pairId}`;
                        const notation = settings.notation.sharps ? 'sharps' : 'flats';

                        const isFlipped = flippedCards.includes(id);
                        const isFound = foundCards.includes(card.chord);

                        return (
                            <Card
                                key={id}
                                id={id}
                                chord={card.chord}
                                mode={card.mode}
                                instrument={card.instrument}
                                colClass={card.colClass}
                                notation={notation}
                                handleCardClick={handleCardClick}
                                handleCardFrontClick={handleCardFrontClick}
                                isFlipped={isFlipped}
                                isFound={isFound}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default Game;
