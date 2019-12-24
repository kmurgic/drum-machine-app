import React from 'react';
import './index.css';

interface DrumPadProps {
  className: string;
  keyName: string;
  play: () => void;
  sound: string;
}

type DrumPadRef = HTMLAudioElement;

const DrumPad = React.forwardRef<DrumPadRef, DrumPadProps>((props, audioRef) => {
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
