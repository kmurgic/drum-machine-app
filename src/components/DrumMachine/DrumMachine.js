import React from 'react';
import Display from '../Display';
import PadSection from '../PadSection';
import './index.css';

const DrumMachine = ({ changeLastSound, lastSound }) => (
  <div className="drum-machine">
    <PadSection changeLastSound={changeLastSound} />
    <Display lastSound={lastSound} />
    <h2 className="drum-machine_title">Drum Machine</h2>
  </div>
);

export default DrumMachine;
