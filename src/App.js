import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from './components/Content'
import ReactAudioPlayer from "react-audio-player";
import Sound1 from "./assets/audio/1.wav";
import Waveform1 from "./assets/png/waveform 1.png";
import Waveform2 from "./assets/png/waveform 2.png";
import Spectrogram1 from "./assets/png/spectrogram 1.png";
import Spectrogram2 from "./assets/png/spectrogram 2.png";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
// import Waveform from "waveform-react";

function App() {




  return (
    //Header
    <div className="source-sans-pro text-[#5F6368]">
      <Header />
      <Content />
    </div>
  );
}

export default App;
