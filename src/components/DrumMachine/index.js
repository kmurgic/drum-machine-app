import React, { Component } from 'react';
import DrumMachine from './DrumMachine';

class DrumMachineContainer extends Component {

  state = { lastSound: '' };

  changeLastSound = (lastSound) => {
    console.log('changing sound')
    this.setState({ lastSound });
  };

  render() {
    return (
      <DrumMachine
        changeLastSound={this.changeLastSound}
        lastSound={this.state.lastSound}
      />
    );
  };
};

export default DrumMachineContainer;
