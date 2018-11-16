import "./App.css";

import React, { Component } from "react";
import Sound from "react-sound";
import gymnopedieMp3 from "./assets/gymnopedieno1.mp3";

class App extends Component {
  state = { audioPosition: 0 };

  resetAudio = () => {
    this.setState({ audioPosition: 0 });
  };

  render() {
    return (
      <Sound
        url={gymnopedieMp3}
        autoPlay={true}
        playFromPosition={this.state.audioPosition}
        playStatus={Sound.status.PLAYING}
        onFinishedPlaying={this.resetAudio}
      />
    );
  }
}

export default App;
