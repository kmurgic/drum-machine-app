import React from 'react';
import DrumPad from '../DrumPad';
import './index.css';


const PadSection = ({ changeLastSound }) => {
  const drumPads = [
    { sound: 'Chord_1.mp3', name: 'Chord 1', id: 'chord-1', keyName: 'Q' },
    { sound: 'Chord_2.mp3', name: 'Chord 2', id: 'chord-2', keyName: 'W' },
    { sound: 'Chord_3.mp3', name: 'Chord 3', id: 'chord-3', keyName: 'E' },
    { sound: 'Heater-1.mp3', name: 'Heater 1', id: 'heater-1', keyName: 'A' },
    { sound: 'Heater-2.mp3', name: 'Heater 2', id: 'heater-2', keyName: 'S' },
    { sound: 'Heater-3.mp3', name: 'Heater 3', id: 'heater-3', keyName: 'D' },
    { sound: 'HighHat.mp3', name: 'High Hat', id: 'high-hat', keyName: 'Z' },
    { sound: 'Kick.mp3', name: 'Kick', id: 'kick', keyName: 'X' },
    { sound: 'Snare.mp3', name: 'Snare', id: 'snare', keyName: 'C' }

  ]
  return (
    <div className="pad-section">
      {drumPads.map((drumPad) => {
        return (
          <DrumPad
            changeLastSound={changeLastSound}
            name={drumPad.name}
            sound={drumPad.sound}
            key={drumPad.id}
            keyName={drumPad.keyName} />
        )
      })}
    </div>
  );
};

export default PadSection;
