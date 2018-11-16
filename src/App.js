import './App.css';

import React, {Component} from 'react';
import Sound from 'react-sound';
import gymnopedieMp3 from './assets/gymnopedieno1.mp3';

class App extends Component {
  state = {started: false, audioPosition: 0};

  startAudio = () => {
    if (!this.state.started) {
      this.setState({started: true});
    }
  };

  resetAudio = () => {
    this.setState({audioPosition: 0});
  };

  render() {
    return (
      <div>
        <button onClick={this.startAudio}>Start</button>
        <Sound
          url={gymnopedieMp3}
          playFromPosition={this.state.audioPosition}
          playStatus={
            this.state.started ? Sound.status.PLAYING : Sound.status.PAUSED
          }
          onFinishedPlaying={this.resetAudio}
        />
      </div>
    );
  }
}

export default App;
