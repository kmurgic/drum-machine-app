import React from 'react';
import Display from '../Display';
import PadSection from '../PadSection';
import './index.css';

export interface soundChanger {
  changeLastSound: (lastSound: string) => void,
};

interface DrumMachineProps extends soundChanger {
  lastSound: string,
}

const DrumMachine = (props: DrumMachineProps) => {
  const { changeLastSound, lastSound } = props
  return (
    <div className="drum-machine">
      <PadSection changeLastSound={changeLastSound} />
      <Display lastSound={lastSound} />
      <h2 className="drum-machine_title">Drum Machine</h2>
    </div>
  );
}

export default DrumMachine;
