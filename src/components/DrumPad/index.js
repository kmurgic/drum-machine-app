import React, { Component } from 'react';
import DrumPad from './DrumPad';

class DrumPadContainer extends Component {

  state = { isActive: false };
  audioRef = React.createRef();

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

  play = () => {
    const audio = this.audioRef.current;
    audio.currentTime = 0;
    audio.play();
    this.props.changeLastSound(this.props.name);
  }

  render() {
    const className = this.state.isActive ? 'drum-pad active' : 'drum-pad';

    return (
      <DrumPad
        ref={this.audioRef}
        changeLastSound={this.props.changeLastSound}
        className={className}
        keyName={this.props.keyName}
        play={this.play}
        sound={this.props.sound}
      />
    );
  };
};

export default DrumPadContainer;
