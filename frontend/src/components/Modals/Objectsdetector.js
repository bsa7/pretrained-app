/** @format */

import React, { useRef, useState, useEffect, useContext } from "react";
import ModalContext from "../../context/Modals/modalContext";

const Objectsdetector = () => {
  const [url, setUrl] = useState("");
  const upBtn = useRef(null);
  const modalContext = useContext(ModalContext);
  const { detectObj } = modalContext;
  useEffect(() => {
    if (url) {
      detectObj(url);
    }
  }, [url]);
  const handleChange = (event) => {
    setUrl(event.target.value);
    console.log(event.target.value, "kjj");
  };
  const handleClick = (event) => {
    upBtn.current.click();
  };
  return (
    <div className='object-detection'>
      <input
        type='url'
        name='image-url'
        className='url-btn'
        onChange={handleChange}
        value={url}
        placeholder='Image url...'
      />
      <input
        type='button'
        className='up-btn upload-btn'
        value='DETECT'
        onClick={handleClick}
      />
      <input
        type='file'
        name='UPLOAD'
        accept='image/*'
        id=''
        hidden
        ref={upBtn}
        onChange={handleChange}
      />
    </div>
  );
};

export default Objectsdetector;
