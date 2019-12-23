import React from 'react';
import './index.css';

const DrumPad = props => {
  const {
    audioRef, className, keyName, play, sound,
  } = props;

  return (
    <div
      className={className}
      onClick={play}
    >
      {keyName}
      <audio
        className='clip'
        ref={audioRef}
        src={`./assets/sounds/${sound}`}
      />
    </div>
  )
}

export default DrumPad;
