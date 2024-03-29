/** @format */

import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ModelContext from '../../context/Models/modelContext';

const TextToSpeech = () => {
  const langs = ['ar-AE-1', 'ru-RU-1', 'en-US-1', 'fr-FR-1'];
  const values = [
    'مرحبا ، هذا اختبار تشغيل.',
    'Здравствуйте, это пробный запуск.',
    'Hello, this is a test run.',
    'Bonjour, ceci est un test.',
  ];
  const [active, setActive] = useState(0);
  const [userText, setUserText] = useState('');

  const modelContext = useContext(ModelContext);
  const { readText, readTextRapidApi } = modelContext;
  const handleChange = (e) => {
    setUserText(e.target.value);
  };

  const play = () => {
    const ctx = new AudioContext();
    let holder;
    if (active === 3) {
      readText({ inputs: userText })
        .then((data) => data.arrayBuffer())
        .then((arrayB) => ctx.decodeAudioData(arrayB))
        .then((decodedAudio) => {
          holder = decodedAudio;
          const playSound = ctx.createBufferSource();
          playSound.buffer = holder;
          playSound.connect(ctx.destination);
          playSound.start(ctx.currentTime);
        });
    } else if (active - 1 >= 0) {
      readTextRapidApi(langs[active - 1], userText)
        .then((response) => response.json())
        .then((response) => {
          const a = new Audio(response.result.audio_url);
          a.play();
        })
        // .catch((err) => console.error(err));
    }
  };
  const handleClick = (val) => {
    setActive(val);
    setUserText(values[val - 1]);
  };
  const actionButtonEnabled = userText.trim() !== '' && active - 1 !== -1

  return (
    <div className="text-container">
      <div className="top-tools">
        <div
          className={`lan-item ${active === 1 && 'active_card'}`}
          onClick={() => handleClick(1)}
        >
          <p>Arabic</p>
        </div>
        <div
          className={`lan-item ${active === 2 && 'active_card'}`}
          onClick={() => handleClick(2)}
        >
          <p>Russian</p>
        </div>
        <div
          className={`lan-item ${active === 3 && 'active_card'}`}
          onClick={() => handleClick(3)}
        >
          <p>English</p>
        </div>
        <div
          className={`lan-item ${active === 4 && 'active_card'}`}
          onClick={() => handleClick(4)}
        >
          <p>French</p>
        </div>
      </div>
      <div className="text-area">

        <textarea
          name="originalText"
          cols="30"
          rows="10"
          placeholder="Enter your text here...."
          value={userText}
          onChange={handleChange}
        />
      </div>

      <Button
        disabled={!actionButtonEnabled}
        onClick={play}
        variant="contained"
      >
        <PlayArrowIcon/>
        Speak!
      </Button>
    </div>
  );
};

export default TextToSpeech;
