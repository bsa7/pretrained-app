/** @format */

import React, { useState } from "react";

const Texttospeech = () => {
  const [userText, setUserText] = useState("");
  const [active, setActive] = useState(0);
  const handleChange = (e) => {
    setUserText(e.target.value);
  };

  return (
    <div className='text-container'>
      <div className='top-tools'>
        <div
          className={`lan-item ${active === 1 && "active_card"}`}
          onClick={() => setActive(1)}
        >
          <p>Arabic</p>
        </div>
        <div
          className={`lan-item ${active === 2 && "active_card"}`}
          onClick={() => setActive(2)}
        >
          <p>Russian</p>
        </div>
        <div
          className={`lan-item ${active === 3 && "active_card"}`}
          onClick={() => setActive(3)}
        >
          <p>English</p>
        </div>
        <div
          className={`lan-item ${active === 4 && "active_card"}`}
          onClick={() => setActive(4)}
        >
          <p>French</p>
        </div>
      </div>
      <div className='text-area'>
        <textarea
          name='originalText'
          cols='30'
          rows='10'
          placeholder='Enter your text here....'
          value={userText}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Texttospeech;
