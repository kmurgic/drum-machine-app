import React, { forwardRef } from 'react';
import './index.css';

const DrumPad = forwardRef((props, audioRef) => {
  const {
    className, keyName, play, sound,
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
});

export default DrumPad;
