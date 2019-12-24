import React, { Component } from 'react';
import DrumPad from './DrumPad';
import { soundChanger } from '../DrumMachine/DrumMachine';

interface DrumPadContainerProps extends soundChanger {
  keyName: string,
  name: string,
  sound: string,
}

class DrumPadContainer extends Component<DrumPadContainerProps> {
  state = { isActive: false };
  private audioRef = React.createRef<HTMLAudioElement>();

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.key.toUpperCase() === this.props.keyName) {
        this.setState({ isActive: true });
      }
    });
    window.addEventListener('keyup', e => {
      if (e.key.toUpperCase() === this.props.keyName) {
        this.setState({ isActive: false });
        this.play();
      }
    });
  };

  play = (e?: HTMLAudioElement) => {
    const audio = this.audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      this.props.changeLastSound(this.props.name);
    }
  }

  render() {
    const className = this.state.isActive ? 'drum-pad active' : 'drum-pad';

    return (
      <DrumPad
        ref={this.audioRef}
        className={className}
        keyName={this.props.keyName}
        play={this.play}
        sound={this.props.sound}
      />
    );
  };
};

export default DrumPadContainer;
